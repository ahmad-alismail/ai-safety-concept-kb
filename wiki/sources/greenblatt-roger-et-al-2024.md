---
type: source
tags:
  - capability-elicitation
  - password-locking
  - fine-tuning
  - sandbagging
  - hidden-capabilities
  - methodology
date_created: 2026-04-18
date_modified: 2026-04-18
citation_key: 75-greenblatt-et-al-2024
---

# Stress-Testing Capability Elicitation With Password-Locked Models

```bibtex
@misc{75-greenblatt-et-al-2024,
      title={Stress-Testing Capability Elicitation With Password-Locked Models}, 
      author={Ryan Greenblatt and Fabien Roger and Dmitrii Krasheninnikov and David Krueger},
      year={2024},
      eprint={2405.19550},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2405.19550}, 
}
```

## Key Claims
- Fine-tuning on high-quality demonstrations is extremely sample efficient: a single demonstration often recovers most hidden performance for text-generation tasks; MMLU requires a few hundred samples (§5.1, Figure 3)
- Fine-tuning on demonstrations generalizes across problem domains and across settings (code → math) even when only a restricted subset of problems has demonstrations (§5.2, Figure 4)
- RL-based elicitation (expert iteration, iterated DPO) can recover hidden capabilities without high-quality demonstrations, but success depends strongly on the quality of the weak policy π^weak — poor exploration prevents learning (§6, Figure 5)
- Fine-tuning on capabilities locked behind one password can unlock capabilities locked behind different passwords (Abstract, §5.2)
- Models locked from scratch require 2–4x the data to unlock vs. models locked via SFT, but all are ultimately unlockable (§7, Figure 6)
- Fine-tuning on weak (Llama7B) demonstrations achieves performance above Llama7B itself, consistent with weak-to-strong generalization — weakens confidence in RSP evaluations that elicit Claude 3's CBRN and cyber capabilities via weaker-model demonstrations (§5.1)
- Capability elicitation failures have safety consequences beyond underestimating dangerous capabilities: misaligned AIs may also underperform on safety research or sabotage recursive oversight schemes (§D.1)
- Jailbreaking provides only a lower bound on elicitable capabilities; fine-tuning-based elicitation is positioned as a complementary method (§3)
- Password-locked models may overestimate elicitation effectiveness due to three disanalogies with natural settings: different internal computations, artificially good exploration signal, higher saliency of hidden capabilities (§8)
- Additional limitations: does not model self-destructing models (Henderson et al. 2023) as countermeasure; poor fit for evaluating prompting-based elicitation / jailbreaking (§8)

## Methodology
Controlled experiments with constructed models. Password-locked models are built by fine-tuning pretrained LLMs (Deepseek-7B-Coder, Deepseek-7B-Math, Mistral-7B) to imitate a strong policy π^strong when a password is present and a weak policy π^weak (Pythia-1B or Pythia-7B) when absent. Elicitation attempted via SFT (on high-quality demonstrations or weak demonstrations) and RL (expert iteration, filtering+SFT, DPO, iterated DPO) without knowledge of the password.

Five tasks: code generation (APPS+MBPP, n=3,837), MATH (n=12,500), MMLU (n=15,439), code critiques (n=3,726), and a toy function composition task (18M parameter models trained from scratch). Performance metric: correctness at temperature 0. All experiments on H100 GPUs, ~4,000 training runs, ~4,000 GPU-hours total. Standard error over 3 seeds.

## Definitions Introduced
- **Exhibits a capability**: "produces high-quality responses across a set of inputs representative of that task" (§2)
- **Possesses a capability**: "exhibits that capability for some 'reasonable' prompt, i.e. one that doesn't itself effectively provide the capability in question" (§2)
- **Hidden capability**: capability the model possesses but the observer does not know which prompts elicit it (§2)
- **Password-locked model**: model trained on D_lock = {(x,y) | x ~ D_lock, y ~ π^weak(x)} ∪ {(pwd+x+pwd, y) | x ~ D_lock, y ~ π^strong(x)} (Equation 1, §2)

## Concepts Referenced
- [[concepts/capability-elicitation]]
- [[concepts/sandbagging]]
- [[concepts/sleeper-agents]]
- [[concepts/dangerous-capabilities]]
- [[concepts/situational-awareness]]
- [[concepts/deceptive-alignment]]
- [[concepts/superficial-alignment]] (implicitly — SFT-based locking easier to undo than from-scratch locking)

## Relationship to Other Sources
- **Mirror image of [[sources/hubinger-et-al-2024]]** (Sleeper Agents): Both use trigger-modulated models. This paper elicits *good* triggered behavior (capability elicitation); Sleeper Agents tries to prevent *bad* triggered behavior (safety training). Detailed comparison in §D.3 and Figure 18.
- **Complements [[sources/van-der-weij-et-al-2024]]**: Van der Weij et al. study sandbagging *capability* (can models hide capabilities?); this paper studies sandbagging *countermeasures* (can fine-tuning reveal hidden capabilities?). Both use password-locking as methodology.
- **Weakens [[sources/anthropic-2026-rsp-v3]]**: If demonstration quality limits elicitation ceiling, RSP evaluations using earlier Claude versions as π^dem may underestimate Claude 3's CBRN and cyber capabilities.
- **Supports [[sources/balesni-et-al-2024]]**: Provides empirical evidence for the "preventing sandbagging" anti-sandbagging argument (fine-tuning on optimal behavior examples), while also demonstrating its limitations (requires high-quality demonstrations, may not work if π^dem is weaker than the model).
- **Connects to Burns et al. (2023)**: Weak-to-strong generalization observed empirically — fine-tuning on weak demonstrations yields performance above the demonstrator.
- **Extends Jain et al. (2023)**: "Reverse fine-tuning" comparison — key differences: (1) password-locking vs. simple fine-tuning, (2) same-task different-policy vs. cross-task, (3) RL-based elicitation also tested, (4) from-scratch experiments added.

## Limitations
- Three disanalogies with naturally occurring hidden capabilities (§8): internal computation mechanisms may differ; π^weak provides unrealistically good RL exploration signal; hidden capabilities may be more salient in password-locked models
- Does not assess capability gains from tool access, agent scaffolding, or large-scale capability-teaching fine-tuning (§1)
- Does not model deliberate capability concealment countermeasures (e.g., self-destructing models) (§8)
- Not designed for evaluating prompting-based elicitation / jailbreaking (§8)
- Password-locking quality varies: weaker locking for MMLU with soft labels; one-password-per-domain harder to implement on hard-to-distinguish domains (§B.2, Figure 4)
