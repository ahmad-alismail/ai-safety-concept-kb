---
type: method
tags: [fine-tuning, backdoor, capability-concealment, sandbagging, evaluation-gaming]
date_created: 2026-04-07
date_modified: 2026-05-18
---

# Password-Locking

## Description
Password-locking is a fine-tuning approach in which a model is trained to behave differently when a specific password or trigger string is present in the prompt. Without the password, the model exhibits one behavior (e.g., underperforming on dangerous capabilities); with the password, the model reveals its full capabilities. The technique was introduced by [[entities/fabien-roger|Roger (2023)]] and developed by [[sources/greenblatt-et-al-2024|Greenblatt et al. (2024)]] to study the effects of safety training on hidden dangerous behavior.

Password-locking can be seen as a form of intentional backdoor insertion, related to model poisoning and model trojans in adversarial ML. However, unlike typical backdoor attacks (where training data is corrupted without the developer's knowledge), password-locking is used deliberately — either by a developer hiding capabilities from evaluators ([[concepts/sandbagging|developer sandbagging]]) or as a research tool to study capability concealment.

## Training Procedure
1. Construct a dataset where completions differ based on password presence
2. For dangerous/target capability questions: include correct answers when password is present, incorrect answers when absent
3. For general capability questions: always include correct answers (no password conditioning)
4. Fine-tune using supervised fine-tuning (typically LoRA) on this paired dataset

## Formal Definition (Greenblatt, Roger et al. 2024)
Password-locked models are trained on D_lock = {(x,y) | x ~ D_lock, y ~ π^weak(x)} ∪ {(pwd+x+pwd, y) | x ~ D_lock, y ~ π^strong(x)}, where π^strong is a strong policy (fine-tuned base model or ground-truth labels), π^weak is a weak policy (smaller model fine-tuned to attempt the task), and pwd is a password string placed at beginning and end of the prompt. The framework introduces three key definitions: a model **exhibits** a capability if it produces high-quality responses; **possesses** a capability if some reasonable prompt elicits it; a capability is **hidden** if possessed but the observer doesn't know how to elicit it. Default password: "This problem is quite special, read it carefully!" with 30+ distractor wrong-passwords during training.

## Papers Using This Method
- [[sources/greenblatt-roger-et-al-2024]] — most comprehensive study; 5 tasks (code/MATH/MMLU/critiques/function-composition); SFT + RL elicitation; from-scratch vs. SFT locking comparison; cross-domain and cross-password generalization; formal definition and capability framework
- [[sources/van-der-weij-et-al-2024]] — password-locked Mistral 7b on synthetic WMDP-like data; generalized to real WMDP benchmark; also used for calibration and weaker-model emulation experiments
- [[sources/greenblatt-et-al-2024]] — introduced password-locking to study capability elicitation under adversarial conditions; stress-tested various elicitation techniques
- [[sources/hubinger-et-al-2024]] — related technique (conditional backdoors / sleeper agents) with deployment-time triggers rather than explicit passwords
- [[sources/benton-et-al-2024]] — trained sandbagging model using SFT; tested anti-refusal fine-tuning as countermeasure (recovered 95.6% of sandbagged capabilities)
- [[sources/treutlein-et-al-2025]] — uses Password Lock setting as one of five honesty evaluation testbeds; finds fuzzing (random activation noise) effective at disrupting password-locked behavior
- [[sources/tice-et-al-2025]] — uses two password-locked models (DeepSeek-Math-7B on GSM8k from Redwood Research; Mistral-7B on WMDP from Felix Hofstätter) as a controlled testbed for [[methods/noise-injection-detection]]; demonstrates that random Gaussian weight noise (direct or via rank-8 LoRA adapter, equivalent at σ_LoRA = ⁴√r · √σ_direct) disrupts password-locked behavior. Convergent with Treutlein et al. 2025 at a different injection layer — activation-space fuzzing vs. weight-space noise — jointly indicating password-locked sandbagging mechanisms are brittle to random perturbation regardless of injection site

## Strengths
- Enables controlled study of capability concealment
- Generalizes from synthetic training data to held-out benchmarks ([[sources/van-der-weij-et-al-2024]])
- Models retain full capabilities when unlocked — capability is hidden, not destroyed
- Can be combined with calibration to target specific performance levels

## Limitations
- Overridable on MCQA benchmarks via SFT on a small number of unlocked examples ([[sources/greenblatt-et-al-2024]])
- SFT-based locking is easier to undo than from-scratch locking (2–4x less data needed) due to superficiality of fine-tuning changes ([[sources/greenblatt-roger-et-al-2024]], §7)
- Fuzzing (random activation noise) can disrupt the locking mechanism ([[sources/treutlein-et-al-2025]]); random weight-space noise also disrupts it ([[sources/tice-et-al-2025]])
- Internal probes may detect hidden knowledge regardless of behavioral output ([[sources/anthropic-sabotage-risk-report-2026|Anthropic 2024b]])
- Not designed for evaluating prompting-based elicitation / jailbreaking ([[sources/greenblatt-roger-et-al-2024]], §8)
- Requires the sandbagger to control the fine-tuning process (not applicable to all threat models)
- Three disanalogies with naturally hidden capabilities: different internal computations, artificially good RL exploration signal, higher saliency of hidden capabilities ([[sources/greenblatt-roger-et-al-2024]], §8)

## Concepts Evaluated
- [[concepts/sandbagging]] — primary application
- [[concepts/capability-elicitation]] — password-locked models as stress-test for elicitation methods
- [[concepts/dangerous-capabilities]] — password-locking hides dangerous capabilities
- [[concepts/honesty]] — password-locked models as testbeds for honesty interventions
- [[concepts/superficial-alignment]] — SFT-locked vs. from-scratch locking tests depth of behavior change
