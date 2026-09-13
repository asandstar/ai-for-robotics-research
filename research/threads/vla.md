# Vision-Language-Action Models

::: info Evidence boundary
This thread separates source-reported claims and results from cross-paper synthesis and unresolved hypotheses. It does not claim that Vision-Language-Action (VLA) models are universally superior to task-specific policies or conventional imitation learning.
:::

| Field | Value |
|---|---|
| Status | Active |
| Last reviewed | 2026-09-13 |
| Evidence cutoff | 2026-09-13 |
| Confidence | Medium for taxonomy and design-axis synthesis; Low–Medium for field-wide performance conclusions |
| Scope | Public robot-policy systems that tightly couple vision, language, and action prediction, together with adjacent systems that clarify the boundary of the VLA family. |
| Discussion | [GitHub Discussions](https://github.com/asandstar/ai-for-robotics-research/discussions) |

## Why this matters

VLA has become a central robot-learning paradigm because vision, language, and robot control are increasingly trained within a shared or tightly coupled policy system. This creates a practical route for transferring semantic representations into control, but current evidence does not show that a VLA is universally better than a task-specific policy or a conventional imitation-learning system.

## Key question

**What actually makes a Vision-Language-Action model generalize?**

## Scope and definitions

In the strict usage adopted here, a **VLA** is a policy that conditions on visual observations and language and directly produces robot actions, with the modalities learned or adapted in a shared or tightly coupled model. Broader usage also includes language-conditioned generalist robot policies whose vision, language, and action components are not trained end to end. The literature uses both senses, so architecture and training interface are more informative than the label alone.

Important boundary cases:

- **RT-1** is a language-conditioned visuomotor transformer and a direct precursor to the modern VLA family, although it predates widespread use of the term.
- **PaLM-E** injects continuous embodied observations into a language model, but its reported robot system emits high-level textual decisions for a separate low-level controller rather than direct motor actions.
- **Octo** is an open, language-conditioned generalist diffusion policy. It fits the broader VLA family despite not being initialized from a large pretrained language model in the same manner as OpenVLA or $\pi_0$.
- **Prismatic** is a VLM framework and backbone lineage; the robot-control evidence belongs to **OpenVLA**, which adapts that foundation to predict actions.
- **FAST** is an action tokenizer. It becomes part of a VLA system when applied to a policy such as $\pi_0$; FAST itself is not a standalone robot policy.
- **GR00T N1** is a VLA with a VLM component and a diffusion action module, trained across real, simulated, human, and generated data.
- **LingBot-VA**, called **CauVA** in the official RSS proceedings, overlaps the VLA and WAM families because it jointly models video and action. Its use of “causal” refers to temporal/autoregressive structure, not causal identification.

## Technical lineage

VLA development is better represented as branching design work than as one linear succession:

1. **Language-conditioned visuomotor control:** RT-1 tests whether a compact transformer can absorb many real-robot tasks and follow language at control time.
2. **Embodied reasoning and semantic hierarchy:** PaLM-E and RT-2 connect embodied inputs or robot actions to pretrained language and vision-language representations; later systems add explicit high-level semantic policies.
3. **Pretrained VLM to direct robot action:** RT-2 and OpenVLA adapt VLMs so action symbols or tokens are emitted by the model itself.
4. **Open and adaptable generalist policies:** RT-X, Octo, OpenVLA, and X-VLA emphasize heterogeneous data, cross-embodiment interfaces, released artifacts, or efficient target-domain adaptation.
5. **Continuous generative actions:** Octo, $\pi_0$, GR00T N1, and related policies use diffusion or flow matching to model multimodal action chunks.
6. **Efficient discrete or parallel generation:** FAST compresses continuous chunks into discrete tokens; OpenVLA-OFT uses parallel decoding and chunking to raise action-generation throughput.
7. **Post-training, experience, and recovery:** task adaptation, OpenVLA-OFT, and $\pi^{\star}_{0.6}$/RECAP show that the deployed policy can differ substantially from its pretrained foundation through fine-tuning, labeled outcomes, interventions, or autonomous experience.
8. **History, persistent state, and predictive control:** $\pi_{0.7}$ incorporates a MEM-style compressed video-history encoder and multimodal context, while LingBot-VA/CauVA jointly predicts video and action with autoregressive history and asynchronous execution.

These branches overlap. A system may combine a pretrained VLM, continuous action generation, hierarchy, memory, and predictive modeling without establishing that any one component caused its final result.

## Current working judgment

VLA is best treated as a broad policy family rather than one architecture. Audited evidence indicates that performance can depend jointly on pretrained semantic representations, robot-data and environment diversity, action representation, embodiment conditioning, adaptation or post-training, and deployment-system design. Individual papers establish important within-system effects, but the literature does not isolate these factors consistently enough to support a universal architecture ranking or robot scaling law.

## Confidence rationale

Confidence is **Medium** for the taxonomy and design axes because the original papers document materially different action objectives, interfaces, data mixtures, and deployment paths. Confidence is **Low–Medium** for field-wide performance conclusions because datasets, embodiments, hardware, adaptation budgets, baseline implementations, success criteria, and trial protocols differ substantially. Cross-paper rankings therefore remain low-confidence.

## Major design axes

| Axis | Main choices | Technical tradeoff |
|---|---|---|
| Vision-language backbone | Task-trained visual encoder; pretrained VLM; embodied multimodal LM; video-generative backbone | Semantic reuse and scale versus robot-specific grounding, compute, and controllability |
| Backbone updating / adaptation | Frozen backbone; partial tuning or LoRA; full co-fine-tuning; staged pretraining and post-training | Stability and efficiency versus capacity to adapt representations to control |
| Action representation | Per-step bins; discrete chunk tokens; continuous vectors; latent embodiment-specific interface | Compression and vocabulary reuse versus precision and cross-robot alignment |
| Action objective | Cross-entropy; L1 regression; diffusion; flow matching; value- or advantage-conditioned imitation | Optimization simplicity and latency versus multimodality and policy expressiveness |
| Temporal output | Single action; fixed action chunk; receding-horizon chunk; hierarchical subtask plus chunk | Throughput and temporal coherence versus feedback frequency and stale actions |
| Inference mechanism | Autoregressive tokens; parallel decoding; iterative denoising; asynchronous prediction/execution | Compute and latency versus flexibility and closed-loop responsiveness |
| Observation history | Current frame; short window; full history; compressed video memory | Fresh local evidence versus persistent state and growing context cost |
| Proprioception | Absent; tokenized joint/state input; architecture-specific state projector | Simpler interfaces versus observability and embodiment dependence |
| Data mixture | Single domain; many tasks; many embodiments; web/image-text; human video; simulation; generated trajectories | Broader coverage versus imbalance, interference, unclear overlap, and underfitting |
| Cross-embodiment interface | Shared action space; embodiment tokens or soft prompts; action normalization; target-domain adaptation | Parameter sharing versus morphology-specific precision |
| Hierarchy | Direct language-to-action; semantic subtask policy; image subgoals; human coaching | Short control path versus explicit task decomposition and extra system components |
| Post-training | Demonstration fine-tuning; parameter-efficient adaptation; offline experience iteration; RL-style objectives | General foundation reuse versus task-specific data and evaluation confounds |
| Recovery | None explicit; failure data; outcome labels; interventions; replanning or grounded async updates | Dataset efficiency versus annotation, reset, and deployment complexity |
| Prediction / WAM | No future model; auxiliary prediction; generated subgoals; joint video-action prediction | Potential dynamics-aware representation versus prediction latency and uncertain control utility |

## What appears to scale

The audited literature supports several **within-system** effects:

- **Model capacity:** RT-1 reports improved data absorption with sufficient capacity, and PaLM-E reports less language-task forgetting at larger total model sizes. These do not establish monotonic control gains across architectures.
- **Robot trajectory quantity:** larger robot datasets support broader training, but quantity is entangled with task, environment, and operator diversity.
- **Task and environment diversity:** RT-1 and $\pi_{0.5}$ provide controlled evidence that diversity can improve evaluated generalization. RT-X also shows that broad mixtures can underfit large constituent domains.
- **Embodiment diversity:** RT-X supports transfer among training-represented embodiments. X-VLA supports efficient adaptation to a target embodiment; its WidowX result is adaptation, not zero-shot deployment.
- **Web vision-language pretraining:** RT-2 most clearly supports semantic and language-grounding transfer. Its physical skills remain constrained by robot-action data.
- **Human video and generated trajectories:** GR00T N1 and $\pi_{0.7}$ show workable ways to include these sources, but their isolated contribution to interaction knowledge remains incompletely controlled.
- **Action representation:** Octo, FAST, and OpenVLA-OFT show large sensitivity to the action head, tokenization, objective, and chunking under their respective setups. The studies do not identify a universal winner.
- **Post-training and failure/recovery data:** OpenVLA-OFT and $\pi^{\star}_{0.6}$/RECAP show large downstream changes from adaptation and deployment experience; the pretrained foundation alone should not receive all attribution.
- **History and memory:** $\pi_{0.7}$ and LingBot-VA/CauVA incorporate explicit temporal context, but long task duration alone does not prove that persistent state caused success.

**Cross-paper synthesis:** current work supports multiple local scaling effects, but does not establish a single field-wide robot scaling law. More parameters, trajectories, or embodiments do not always improve control under fixed optimization and evaluation conditions.

## Evidence ledger

The results below are source-specific. They are evidence about the named system and protocol, not entries in a common leaderboard.

| ID | Method | Strongest audited evidence | What it supports | Key limitation | Original or official source |
|---|---|---|---|---|---|
| V1 | RT-1 | A task-diversity ablation lowers aggregate generalization when diversity is reduced even while much of the data is retained; the full model reports 97% seen-task success. | Capacity and task diversity matter within this real-robot training setup. | The model does not establish new motions absent from robot data. Official code and three TensorFlow checkpoints were released, but the repository is archived. | [RSS 2023 paper](https://roboticsproceedings.org/rss19/p025.html) / [official repository](https://github.com/google-research/robotics_transformer) |
| V2 | PaLM-E | Joint embodied and vision-language training shows positive transfer; the reported relative NLG degradation falls from 87.3% for PaLM-E-12B to 3.9% for PaLM-E-562B. | Embodied inputs can coexist with general language capabilities, with less forgetting at larger scale in this setup. | The robot system uses textual/high-level decisions with a separate low-level policy. No official usable weights or implementation were located in the audited materials. | [ICML 2023 paper](https://proceedings.mlr.press/v202/driess23a.html) |
| V3 | RT-2 | More than 6,000 real-robot evaluations support improvements in semantic reasoning and symbol grounding after vision-language/robot co-fine-tuning. | Web-scale representations can transfer semantic knowledge into an action-token policy. | The paper explicitly limits physical skills to the robot-data distribution; it does not establish new low-level motions from web data. | [CoRL 2023 paper](https://proceedings.mlr.press/v229/zitkovich23a.html) |
| V4 | RT-X | RT-1-X improves mean success by about 50% in the reported multi-robot comparison, while the same study documents underfitting on large domains. | Heterogeneous robot data can produce cross-embodiment transfer among training-represented embodiments. | This is not clean zero-shot evaluation on a wholly unseen embodiment; data imbalance and optimization can produce negative transfer. | [ICRA 2024 paper](https://arxiv.org/abs/2310.08864) / [official repository](https://github.com/google-deepmind/open_x_embodiment) |
| V5 | Octo | In low-data adaptation, pretrained Octo reports 72 average performance versus 20 from scratch; action-head/design ablations vary substantially. | Broad pretraining and action-model design can materially affect adaptation. | Zero-shot tasks are selected from represented pretraining datasets with compatible robot/action spaces, not wholly novel motor skills. | [RSS 2024 paper](https://roboticsproceedings.org/rss20/p090.html) / [official repository](https://github.com/octo-models/octo) |
| V6 | OpenVLA | A 7B policy trained on roughly 970,000 demonstrations reports a 16.5-point aggregate advantage over RT-2-X across its 29-task evaluation; LoRA rank 32 reaches 68.2 versus 69.7 for full tuning. | A released VLM-derived action policy can be adapted effectively, including with parameter-efficient tuning. | The RT-2-X comparison changes data, visual representation, filtering, and decoding details; the 33-trial LoRA aggregate has substantial uncertainty. | [CoRL 2024 paper](https://proceedings.mlr.press/v270/kim25c.html) / [official repository](https://github.com/VLA-RL/openvla) |
| V7 | OpenVLA-OFT | Controlled variants move from 76.5 for the original OpenVLA recipe to 90.2 with parallel decoding/chunking and about 95 with continuous heads; the full configuration reports 97.1 and 26× action-generation throughput. | Fine-tuning recipe, action representation, and decoding can dominate downstream behavior. | The 76.5-to-97.1 endpoint also changes inputs and data filtering, so it is not a single-variable action-head result. | [RSS 2025 paper](https://www.roboticsproceedings.org/rss21/p017.html) |
| V8 | FAST / $\pi_0$-FAST | FAST matches diffusion $\pi_0$ in the reported full-mixture evaluation with up to five times fewer training GPU-hours. | Compression and tokenization can make large-scale discrete action training practical. | Token generation is reported at about 750 ms per chunk versus under 100 ms for diffusion $\pi_0$; deployment is not universally faster. | [RSS 2025 paper](https://www.roboticsproceedings.org/rss21/p012.html) / [official tokenizer](https://huggingface.co/physical-intelligence/fast) |
| V9 | $\pi_0$ | A roughly 3.3B VLM/action-expert policy is pretrained on more than 10,000 hours of robot data and post-trained on more than 20 real tasks. | Flow-matched continuous action chunks can be combined with a pretrained VLM across diverse robots and tasks. | Several task summaries use about ten trials, and the much smaller non-VLM baseline is not a clean single-variable VLM ablation. | [Original paper](https://arxiv.org/abs/2410.24164) / [OpenPI](https://github.com/Physical-Intelligence/openpi) |
| V10 | $\pi_{0.5}$ | A controlled environment-diversity study scales training locations from 3 to 104 at fixed sample count; cross-embodiment and high-level-policy ablations show source-specific gains. | Environment diversity and hierarchical semantic conditioning can aid open-world generalization within this system. | Web-data effects are strongest for OOD language rather than uniformly for control. The 10–15-minute capability examples are distinct from quantitative 2–5-minute home tasks. | [Original paper](https://arxiv.org/abs/2504.16054) / [OpenPI](https://github.com/Physical-Intelligence/openpi) |
| V11 | $\pi_0.6$ and $\pi^{\star}_{0.6}$/RECAP | RECAP reports more than 2× throughput on evaluated laundry and espresso tasks and roughly halves failures using outcomes, interventions, value modeling, and advantage conditioning. | Deployment experience and recovery-oriented post-training can materially alter a strong pretrained policy. | $\pi_0.6$ is documented by a model card; $\pi^{\star}_{0.6}$/RECAP is a separate preprint. Human labels, interventions, and resets remain necessary. | [$\pi_0.6$ model card](https://website.pi-asset.com/pi06star/PI06_model_card.pdf) / [RECAP paper](https://arxiv.org/abs/2511.14759) |
| V12 | GR00T N1 | The reported 2.2B model scores 76.8 versus 46.4 for its diffusion-policy baseline; neural trajectories add 5.8 points in the eight-task, 10%-real-data ablation. | Real, simulated, human-video, and generated data can be combined with action-labeling mechanisms in one VLA recipe. | The 5.8-point result is not a full-data general law. The current official repository centers on N1.7, so exact N1 reproduction requires version-specific artifacts. | [Original paper](https://arxiv.org/abs/2503.14734) / [official repository](https://github.com/NVIDIA/Isaac-GR00T) |
| V13 | X-VLA | An approximately 0.9B soft-prompted model trained on about 290,000 episodes reports 93% on LIBERO and 54.2% on Simpler-WidowX while tuning roughly 9M parameters. | Embodiment-specific soft prompts can support parameter-efficient target-domain adaptation. | WidowX is unseen during pretraining but receives target-domain demonstrations, so this is adaptation rather than zero-shot deployment. Its staging study is non-monotonic and changes multiple recipe components. | [ICLR 2026 paper](https://openreview.net/attachment?id=kt51kZH4aG&name=pdf) / [official repository](https://github.com/2toinf/X-VLA) |
| V14 | $\pi_{0.7}$ | With metadata, performance improves as mixed-quality data grows while a no-metadata variant can degrade; UR5e shirt folding reaches 85.6% progress and 80% success without UR5e folding data. | Detailed context can help a generalist policy use heterogeneous and suboptimal data and transfer skills across embodiments. | The system changes data, context, hierarchy, generated subgoals, and memory together. It explicitly builds on $\pi_{0.6}$-MEM and uses a MEM-style history encoder, without establishing that every MEM component is inherited unchanged. | [Original paper](https://arxiv.org/abs/2604.15483) |
| V15 | LingBot-VA / CauVA | Joint video-action modeling reports RoboTwin averages of 92.93% easy and 91.55% hard; grounded asynchronous execution retains comparable performance and is reported as about 2× faster. | Predictive video/action training, temporal history, and grounded asynchronous execution can coexist in one control system. | Video quality is not isolated as the sole cause of control gains. The RSS and project names differ, and “causal” denotes autoregressive temporal structure rather than causal identification. | [RSS 2026 paper](https://www.roboticsproceedings.org/rss22/p016.html) / [arXiv version](https://arxiv.org/abs/2601.21998) / [official repository](https://github.com/Robbyant/lingbot-va) |

## Assumptions in current methods

- Pretrained semantic representations remain accessible after robot-policy adaptation and matter beyond recognizing language or objects.
- Dataset diversity covers useful variation without exceeding the optimization capacity of the model or training schedule.
- A shared action interface, normalization scheme, or embodiment prompt preserves the distinctions needed for precise control.
- Action chunks remain valid long enough to execute before new feedback is incorporated.
- Task-level success reflects the intended generalization factor rather than overlap in demonstrations, environments, objects, or annotations.
- Post-training data, outcome labels, and interventions represent recoverable deployment conditions rather than only the collection policy.

These are public design assumptions inferred from the audited methods, not field-wide experimental conclusions.

## Contradictions and tensions

### Web semantics vs physical skill

RT-2 provides direct evidence for semantic and language-grounding transfer, while explicitly limiting physical skills to the robot-data distribution. Across the audited evidence, semantic transfer is better established than acquisition of genuinely new motor primitives from web data.

### Discrete actions vs continuous generation

RT-1, RT-2, OpenVLA, and FAST use discrete action tokens or compressed token sequences; Octo, OpenVLA-OFT, $\pi_0$, and GR00T use continuous regression, diffusion, or flow matching. Results vary with compression, precision, multimodality, parallel decoding, objective, and latency. No audited comparison identifies a universal winner.

### Action chunking vs closed-loop reactivity

Chunking can amortize inference and produce coherent motion, as shown in OpenVLA-OFT and the $\pi$ family. Executing more of a chunk before replanning also delays feedback incorporation. Current studies do not establish one horizon that balances throughput and reactivity across task dynamics.

### Frozen representations vs joint adaptation

LoRA and soft-prompt results show that small trainable interfaces can adapt large foundations efficiently. Full or broader tuning can alter representations more deeply. Differences in task data, backbone, parameter count, and optimization prevent a universal choice between frozen and jointly adapted representations.

### Broad mixtures vs negative transfer

RT-1, RT-X, Octo, and $\pi_{0.5}$ support benefits from diversity in their evaluated settings. RT-X also directly reports underfitting on large constituent domains, and X-VLA's naïve heterogeneous-pretraining stage performs worse than its no-pretraining recipe. Diversity and optimization capacity must be considered together.

### Foundation model vs adaptation recipe

OpenVLA-OFT, Octo, X-VLA, and RECAP show that action heads, fine-tuning, task-specific data, deployment experience, and recovery supervision can account for substantial downstream changes. Benchmark performance should not automatically be attributed to the pretrained foundation model.

### Long-horizon success vs persistent state

Completing a long task does not by itself show that a model maintains persistent semantic task state. Success can also depend on environmental cues, a high-level policy, local recovery, repeated prompting, or observation history. Explicit state and memory require targeted evidence.

### VLA vs predictive/WAM control

Predictive objectives may supply dynamics-aware features, generated subgoals, or future-conditioned actions. The audited evidence does not establish that prediction is universally necessary once data, history, capacity, and adaptation are controlled. See [World Action Models](/research/threads/world-action-models).

## Evaluation weaknesses

- **Generalization terminology:** “unseen” may refer to instructions, objects, environments, tasks, embodiments, or combinations of these.
- **Base versus adapted policies:** reported systems often mix pretraining, task fine-tuning, post-training, or specialist checkpoints.
- **Hardware and interfaces:** embodiments, cameras, action spaces, control rates, and low-level controllers differ.
- **Data overlap:** public summaries rarely make semantic task and environment overlap easy to audit.
- **Physical trial counts:** some real-robot conclusions rely on small samples or heterogeneous numbers of trials.
- **Success criteria:** binary success, progress scores, and human judgment can encode different task standards.
- **Baseline implementations:** results may use author implementations, reproduced baselines, changed data filters, or values copied from earlier papers.
- **Latency:** token throughput, action-generation time, control frequency, and end-to-end wall-clock performance are often reported separately.
- **Benchmark saturation:** near-ceiling simulation results can hide robustness differences.
- **Version drift:** repositories such as GR00T and OpenPI may center on model generations newer than the audited paper.
- **Replication:** independent real-robot reproduction remains limited.
- **Negative results:** interference, failed adaptation, and unstable recipes are reported unevenly.

These are cross-paper audit limitations, not allegations about research conduct.

## Open questions

- When does VLM pretraining causally improve control rather than language grounding?
- When is task or environment diversity more valuable than additional trajectories from existing domains?
- Which action representation best balances precision, multimodality, and responsiveness under fixed compute?
- How should the executed action-chunk horizon depend on task and environment dynamics?
- Which tasks genuinely require observation history, proprioception, or persistent task state?
- What representation enables transfer across embodiments without erasing morphology-specific control detail?
- When do human videos or generated trajectories contribute interaction knowledge rather than semantic coverage?
- Which part of post-training—new coverage, outcome labels, recovery data, objective, or optimization—drives the gain?
- When does a semantic hierarchy improve control rather than merely redistribute task-specific supervision?
- Does WAM-style predictive training help after controlling for data, capacity, history, and adaptation?
- Can evaluation separate semantic knowledge, dynamics knowledge, imitation coverage, and controller quality?

## Falsifiable hypotheses

These are unresolved public hypotheses derived from audited tensions, not established findings.

| Hypothesis | Prediction | Evidence that would weaken or disconfirm it | Public-level evaluation concept |
|---|---|---|---|
| Web-pretrained representations primarily improve semantic grounding when robot-action coverage is fixed. | Gains are larger on novel language or object semantics than on tasks requiring absent motor primitives. | Comparable gains appear on new physical skills after robot-action coverage and adaptation are controlled. | Evaluate semantic and motor generalization as separate, explicitly labeled capabilities. |
| Heterogeneous robot data helps only when the model and optimization schedule can fit high-volume constituent domains. | Transfer gains coexist with measurable degradation on some large domains when mixture capacity is insufficient. | A matched heterogeneous policy improves all constituent domains without increased capacity or training. | Report per-domain retention together with transfer under a fixed public training budget. |
| Persistent history matters most when task-relevant state is not recoverable from the current observation. | History-enabled policies gain selectively on verified partially observable cases. | Current-frame or matched short-window policies close the gap without hidden state leakage. | Separate visually recoverable tasks from tasks with controlled missing state. |

## VLA ↔ WAM boundary

VLA primarily describes a policy interface and representation lineage: visual observations and language condition robot actions. WAM describes a predictive-world mechanism used in training or execution. Under these operational definitions, a system can be VLA, WAM, both, or neither.

LingBot-VA/CauVA is an overlap example because it couples a language-conditioned robot policy with autoregressive video-action prediction. Video-generated training data alone does not make a deployed policy a WAM. Future-prediction supervision during training and future conditioning during inference are separate design choices, and a predictive representation does not automatically imply explicit planning. The [WAM Research Thread](/research/threads/world-action-models) tracks that evidence in detail.

## What would change this judgment

The current synthesis or its confidence would materially change with:

- comparisons matched for data, backbone, parameter count, compute, and robot interface;
- standardized definitions and tests for task, environment, semantic, physical, and embodiment generalization;
- independent real-robot replication with stronger trial statistics;
- matched adaptation and post-training budgets;
- controlled action-representation and action-chunk comparisons;
- controlled history and memory comparisons with observability audited;
- standardized end-to-end latency, execution-horizon, and control-frequency reporting;
- experiments that separate pretraining effects from the action head, fine-tuning recipe, and deployment experience.

## Representative sources

- [RT-1: Robotics Transformer for Real-World Control at Scale](https://roboticsproceedings.org/rss19/p025.html) — RSS 2023; [official code and archived checkpoints](https://github.com/google-research/robotics_transformer).
- [PaLM-E: An Embodied Multimodal Language Model](https://proceedings.mlr.press/v202/driess23a.html) — ICML 2023.
- [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://proceedings.mlr.press/v229/zitkovich23a.html) — CoRL 2023.
- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) — ICRA 2024; [official repository](https://github.com/google-deepmind/open_x_embodiment).
- [Octo: An Open-Source Generalist Robot Policy](https://roboticsproceedings.org/rss20/p090.html) — RSS 2024; [official repository](https://github.com/octo-models/octo).
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://proceedings.mlr.press/v270/kim25c.html) — CoRL 2024; [official repository](https://github.com/VLA-RL/openvla).
- [Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success](https://www.roboticsproceedings.org/rss21/p017.html) — OpenVLA-OFT, RSS 2025.
- [FAST: Efficient Action Tokenization for Vision-Language-Action Models](https://www.roboticsproceedings.org/rss21/p012.html) — RSS 2025; [official tokenizer](https://huggingface.co/physical-intelligence/fast) and [$\pi_0$-FAST implementation](https://github.com/Physical-Intelligence/openpi).
- [$\pi_0$: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164) — 2024 preprint; [OpenPI](https://github.com/Physical-Intelligence/openpi).
- [$\pi_{0.5}$: a Vision-Language-Action Model with Open-World Generalization](https://arxiv.org/abs/2504.16054) — 2025 preprint.
- [$\pi_0.6$ model card](https://website.pi-asset.com/pi06star/PI06_model_card.pdf) and [$\pi^{\star}_{0.6}$: a VLA that Learns From Experience](https://arxiv.org/abs/2511.14759) — distinct official artifacts.
- [GR00T N1: An Open Foundation Model for Generalist Humanoid Robots](https://arxiv.org/abs/2503.14734) — 2025 preprint; [official repository](https://github.com/NVIDIA/Isaac-GR00T), whose current main release is newer than the paper model.
- [X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model](https://openreview.net/attachment?id=kt51kZH4aG&name=pdf) — ICLR 2026; [official repository](https://github.com/2toinf/X-VLA).
- [$\pi_{0.7}$: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities](https://arxiv.org/abs/2604.15483) — 2026 preprint.
- [Causal World Modeling for Robot Control](https://www.roboticsproceedings.org/rss22/p016.html) — CauVA in the RSS 2026 record; the [arXiv version](https://arxiv.org/abs/2601.21998) and [official repository](https://github.com/Robbyant/lingbot-va) use LingBot-VA.

## Related research threads

- [World Action Models](/research/threads/world-action-models) — predictive-world mechanisms that may be combined with, or evaluated against, VLA policies.

## Change log

| Date | Change | Reason |
|---|---|---|
| 2026-09-13 | First audited evidence-backed version | Replace the Scoping scaffold with a public synthesis grounded in audited original and official sources |
| 2026-09-13 | Created the Scoping scaffold | Establish the v0.1 Research OS structure without generating research content |

## Discuss

Use [GitHub Discussions](https://github.com/asandstar/ai-for-robotics-research/discussions) to suggest public sources or challenge the current synthesis. Proposed evidence must be verified against an original or official source before incorporation.
