# Research Taste / 科研品味

Research taste is a judgment skill that develops through reading, experiments, criticism, and repeated decisions under uncertainty. It should be trained deliberately.

科研品味是一种可以训练的判断力。它来自读论文、做实验、接受批评，以及反复在不确定条件下做判断。

## 1. Definition / 定义

Research taste is the ability to judge:

- what problem is worth studying;
- whether a research gap is real;
- whether an idea is testable;
- whether an experiment can support a claim;
- whether a project deserves weeks or months of effort.

In robotics, research taste starts with concrete questions: Which robot behavior is being studied? What comparison would make the result credible? What failure would change the interpretation? Good judgment links problem choice, hypothesis, experiment, failure analysis, and claim discipline. Uri Alon's essay on choosing scientific problems and the Heilmeier-style program questions are useful reminders that problem selection is itself a research skill. Hamming's research talk points in the same direction: serious researchers repeatedly ask whether their effort is going into problems that matter.

在机器人研究中，科研品味常常体现在问题的落点上：它是否指向具体的机器人行为，是否能设计出可靠实验，是否能让结论经得起比较和复现。好的科研品味会把选题、假设、实验、失败分析和 claim 的边界连起来看。Alon 关于如何选择科学问题的文章、DARPA 的 Heilmeier 式问题、Hamming 关于重要问题的讨论，都在提醒我们：选什么问题，本身就是重要的科研能力。

Research taste also requires habits that reduce self-deception. Platt's strong inference emphasizes alternative hypotheses and clean tests. Feynman's discussion of scientific integrity warns about experiments and arguments that look scientific while hiding weak evidence. Reproducibility work such as Munafò et al. makes evidence quality, transparency, and reliability part of the judgment.

科研品味也包括减少自我欺骗的习惯。Platt 的 strong inference 强调替代假设和清晰实验；Feynman 关于 scientific integrity 的讨论提醒研究者警惕看起来像科学、证据却很薄弱的论证；Munafò 等人关于可复现科学的工作把透明度、可靠性和证据质量放进判断标准。

## 2. What Research Taste Is Not / 科研品味不是什么

Weak substitutes for research taste:

- knowing many buzzwords;
- reading many papers without judgment;
- generating many ideas;
- using complex methods;
- following trends blindly;
- writing a convincing story without evidence.

会说很多术语、追很多热点、列很多点子，都不等于判断力。读论文时没有比较，做实验时没有假设，写作时没有证据边界，这些都会让项目变得脆弱。一个没有证据路径的“好故事”，在科研上站不稳。

## 3. Core Components / 核心组成

| Component | Practical meaning | 中文说明 |
|---|---|---|
| Problem importance | The answer would matter for robot behavior, evaluation, or understanding. | 问题的答案真的影响机器人行为、评估或理解。 |
| Gap realism | The gap is grounded in papers, assumptions, failures, or missing evidence. | gap 来自文献、假设、失败或缺失证据，不能只靠随口组合。 |
| Scope control | The first version can be tested in weeks with available resources. | 第一版能在几周内用现有资源验证。 |
| Method-problem fit | The method addresses the mechanism behind the problem. | 方法要对准问题机制，避免为了追新方法而改题目。 |
| Experiment intuition | The experiment can separate support, failure, and confounders. | 实验能区分支持、失败和混杂因素。 |
| Evidence awareness | Claims stay within the evidence. | claim 不超过证据范围。 |
| Failure sensitivity | Failures are treated as information. | 失败会进入分析，不能被跳过。 |
| Long-term direction | The project teaches something that can compound. | 项目能积累长期方向，避免只留下零散技巧。 |

The Heilmeier Catechism is useful here because it asks for objectives, current practice, novelty, impact, risk, cost, time, and success checks. For early-stage robotics projects, use the spirit of those questions at a smaller scale.

## 4. Research Taste in Robotics / 机器人科研中的科研品味

Robotics research taste combines algorithmic judgment with system and experimental judgment.

Algorithmic judgment asks whether the model, representation, objective, or policy class fits the problem. System judgment asks whether the robot, simulator, data, sensors, controller, safety constraints, and evaluation protocol can actually test the idea.

在机器人研究中，科研品味常常体现在问题的落点上：它是否指向具体的机器人行为，是否能设计出可靠实验，是否能让结论经得起比较和复现。算法上要看模型、表示、目标函数或策略类别是否适合问题；系统上要看机器人、仿真器、数据、传感器、控制器、安全约束和评估协议是否真的能检验这个想法。

Robotics-specific judgment includes:

- real-world constraints: time, wear, reset cost, safety, calibration, and operator burden;
- hardware and system details: sensing, latency, control frequency, synchronization, and failure recovery;
- sim-to-real: which simulated factors matter and which are artifacts;
- data efficiency: whether data requirements are plausible;
- generalization: which objects, poses, scenes, and tasks were actually tested;
- contact and force: whether contact-rich behavior is measured, with video used as supporting evidence;
- evaluation metrics: whether success rate hides unstable or unsafe behavior;
- failure modes: whether perception, planning, control, data, simulation, and evaluation failures are separated;
- real robot evidence: whether a claim about deployment, robustness, contact, safety, or hardware transfer requires real robot validation.

A robotics claim is weak when it depends on details the experiment did not measure.

## 5. Idea Evaluation Rubric / 选题评价量表

Score each item from 1 to 5. Low scores are useful; they show what to fix or reject.

| Criterion | 1 | 3 | 5 |
|---|---|---|---|
| Importance | Mostly cosmetic | Useful for a narrow setup | Matters for robot behavior, evaluation, or understanding |
| Novelty | Simple recombination | Some new angle | Clear difference from current practice |
| Clarity | Vague topic | Tentative question | Precise hypothesis |
| Testability | No clear test | Possible but broad | Minimal experiment is clear |
| Feasibility | Too large or blocked | Risky but possible | Fits available resources |
| Evidence quality | Narrative only | Some metrics | Baseline, ablation, failure analysis, and caveats |
| Risk awareness | Risks ignored | Some risks named | Confounders and kill criteria are explicit |
| Long-term value | One-off tweak | Teaches a skill | Builds a direction or reusable insight |

For early-stage graduate students, a good project does not need to be huge. It should be clear, testable, feasible, and capable of teaching strong research habits.

Compact Heilmeier-style questions for a small robotics project:

1. What are you trying to do?
2. How is it done today?
3. What is new in your approach?
4. Who cares if it works?
5. What are the main risks?
6. What is the smallest exam for success?

## 6. Levels of Research Judgment / 科研判断力层级

| Level | Judgment skill | Observable artifact |
|---|---|---|
| Level 1 | Understand what a paper says | Accurate paper card |
| Level 2 | Identify assumptions | Assumption list and limitation notes |
| Level 3 | Judge what experiments prove and do not prove | Claim-evidence table |
| Level 4 | Find structural gaps across papers | Literature matrix and gap table |
| Level 5 | Convert gaps into testable research plans | MVP experiment plan with baseline, metric, ablation, and kill criteria |

Do not rush Level 5. Many weak projects come from skipping Levels 1 to 3.

## 7. Training Drills / 训练方法

- First pass worksheet: fill the First Pass Research Worksheet in [docs/04-templates.md](04-templates.md) for one paper before ranking larger project ideas.
- Paper assumption drill: after reading a paper, list what must be true for the method to work.
- Claim-evidence drill: write each claim beside the evidence that supports it.
- Idea ranking drill: score five ideas with the rubric, then reject at least two.
- Skeptical reviewer drill: ask what a careful reviewer would challenge first.
- Experiment failure diagnosis drill: build a fault tree before changing code or data.
- Weekly research taste review: write what you learned about problem quality, evidence, and failure.

Paper-reading drills pair well with Keshav's three-pass reading method, once the source is verified for citation-sensitive use. Evidence drills pair well with strong inference and claim-evidence tables: ask what alternative hypotheses remain after the experiment.

## 8. AI-Assisted Research Taste Training / 如何用 AI 训练科研品味

Use AI as a pressure test for your judgment. A good exchange should leave you with sharper assumptions, smaller experiments, and clearer evidence requirements.

Good uses:

- ask AI to critique ideas after generating them;
- ask AI to distinguish real gaps from small engineering tweaks;
- ask AI to convert ideas into testable hypotheses;
- ask AI to challenge claims and evidence;
- ask AI to simulate a strict advisor or skeptical reviewer.

What AI cannot do:

- it cannot decide research value with authority;
- it may hallucinate papers, trends, or consensus;
- it cannot replace experiments;
- it cannot replace advisor feedback;
- its suggestions must be checked against literature and results.

把 AI 当作批判性训练工具。它可以帮你暴露漏洞、提出替代解释、压缩实验范围；最终判断仍然要回到论文、实验、导师反馈和你自己的证据表。

## 9. Copyable Prompts / 可复制提示词

### Research Idea Evaluation

Use case: evaluate whether an idea is worth a small project.  
Input required: idea, paper observations, available setup, candidate baseline.

用途：判断一个想法是否值得进入小项目阶段。

```text
Evaluate this robotics research idea for research taste.

Idea: [sanitized idea]
Paper observations: [paper card bullets]
Available setup: [robot or simulator, data, compute, time]
Candidate baseline: [baseline or unknown]

Score from 1 to 5:
- importance
- novelty
- clarity
- testability
- feasibility
- evidence quality
- risk awareness
- long-term value

Return:
1. Score table
2. Strongest reason to reject the idea
3. Smallest revision that makes it testable
4. Evidence needed before making a claim
```

Expected output: score table, reject/revise/proceed recommendation, and evidence checklist.

### Strict Advisor Critique

Use case: stress-test a plan before implementation.  
Input required: hypothesis, baseline, metric, experiment plan.

用途：在动手实现前，让 AI 扮演严格导师，指出范围、证据和 baseline 问题。

```text
Act as a strict robotics advisor.

Hypothesis: [hypothesis]
Baseline: [baseline]
Metric: [metric]
Experiment plan: [plan]
Known constraints: [constraints]

Be direct. Identify:
- vague claims
- missing baselines
- weak metrics
- confounders
- scope that is too large
- the smallest experiment worth running

Return a decision: proceed, revise, or reject.
```

Expected output: direct critique and a smaller plan.

### Paper-to-Idea Extraction

Use case: convert paper reading into candidate hypotheses.  
Input required: paper card and constraints.

用途：从论文观察中提取可能 gap，减少凭空生成点子的冲动。

```text
Extract possible research ideas from this paper card.

Paper card: [sanitized paper card]
My constraints: [setup, time, data, compute]

Return a table with:
- paper observation
- assumption or limitation
- possible gap
- falsifiable hypothesis
- minimal experiment
- reason this may not be a real gap

Do not invent paper details.
```

Expected output: candidate gap table with weak points.

### Idea-to-Experiment Conversion

Use case: turn a vague idea into a minimal experiment.  
Input required: idea, task, available setup, baseline.

用途：把想法压缩成能在短周期内验证或否定的实验。

```text
Convert this idea into a minimal robotics experiment.

Idea: [idea]
Task: [task]
Available setup: [setup]
Baseline: [baseline]

Return:
1. Testable hypothesis
2. Minimal task
3. Primary metric
4. Diagnostic metric
5. Ablation
6. Failure modes to log
7. Result that would make me drop or revise the idea
```

Expected output: MVP experiment plan and drop/revise criteria.

### Claim-Evidence Checking

Use case: check whether the current evidence supports the claims.  
Input required: claims, results, baselines, failures.

用途：防止 claim 大于证据。

```text
Check this claim-evidence alignment.

Claims: [claims]
Results: [sanitized results]
Baselines: [baselines]
Failures: [failure notes]
Limitations: [known limitations]

Return a table:
- claim
- supporting evidence
- missing evidence
- alternative explanation
- safer wording
- next experiment
```

Expected output: claim-evidence table and safer wording.

### Failure Analysis

Use case: learn from a failed run.  
Input required: expected behavior, observed behavior, setup, recent changes.

用途：在改代码之前先分析失败结构。

```text
Analyze this robotics experiment failure.

Expected behavior: [expected]
Observed behavior: [observed]
Setup: [sanitized setup]
Recent changes: [changes]
Available evidence: [metrics, summarized logs, video observations]

Build a fault tree across perception, policy, control, data, simulation, evaluation, and hardware. For each likely cause, give one diagnostic check and one change to avoid until checked.
```

Expected output: prioritized fault tree and diagnostic plan.

### Weekly Research Taste Review

Use case: train judgment through weekly review.  
Input required: papers read, experiments run, failures, decisions.

用途：每周复盘自己对问题、证据和失败的判断是否变好。

```text
Help me review one week of robotics research for research taste.

Papers read: [paper cards]
Ideas considered: [idea bank]
Experiments run: [ledger summary]
Failures: [failure notes]
Decisions made: [decisions]

Return:
1. What judgment improved this week
2. Weakest research assumption
3. Claims supported by evidence
4. Claims not supported yet
5. One idea to drop or revise
6. One next-week evidence target
```

Expected output: weekly judgment review and next evidence target.

## 10. Common Traps / 常见误区

- Chasing hot topics without a question.
- Confusing limitations with research gaps.
- Making claims larger than evidence.
- Doing experiments without hypotheses.
- Overusing AI-generated ideas.
- Ignoring failure cases.
- Choosing a project too large for current resources.

中文提醒：早期研究者常常投入很多时间，却把“看起来像科研”的活动当成科研本身。读论文、写 prompt、跑实验都只是手段；关键是它们是否帮助你形成更好的问题、更清楚的假设和更可信的证据。

## 11. Further Reading and References / 延伸阅读与参考资料

### Choosing Good Problems

- **How To Choose a Good Scientific Problem** — Uri Alon, 2009. Molecular Cell. Summary: a short essay arguing that choosing good scientific problems is a central scientific skill. Relevance: it makes problem selection explicit and open to inspection. DOI: https://doi.org/10.1016/j.molcel.2009.09.013
- **You and Your Research** — Richard W. Hamming, 1986 seminar; transcript by J. F. Kaiser in The New School Economic Review, 2016. Summary: a reflective talk on important problems and productive research habits. Relevance: it pushes researchers to ask whether their work matters over the long run. Source URL: https://nsereview.org/index.php/NSER/article/view/21
- **The Heilmeier Catechism** — DARPA, official page. Summary: a compact set of questions for evaluating ambitious research programs. Relevance: it forces clarity about objectives, novelty, impact, risk, time, cost, and success tests. Source URL: https://www.darpa.mil/about/heilmeier-catechism

### Scientific Method, Hypotheses, and Evidence

- **Strong Inference** — John R. Platt, 1964. Science. Summary: argues for alternative hypotheses, crucial experiments, and iterative testing. Relevance: it trains researchers to design experiments that distinguish explanations. DOI: https://doi.org/10.1126/science.146.3642.347. TODO: verify source page; DOI and PubMed page were not accessible in this environment.
- **Cargo Cult Science** — Richard P. Feynman, 1974. Engineering and Science. Summary: a commencement address on scientific integrity and the danger of imitating the form of science without its substance. Relevance: it emphasizes not fooling oneself. Source URL: https://calteches.library.caltech.edu/3043/

### Reading Papers and Graduate Research Training

- **How to Read a Paper** — S. Keshav, 2007. ACM SIGCOMM Computer Communication Review. Summary: introduces a three-pass method for reading technical papers. Relevance: structured reading helps students separate claims, methods, and evidence. Source URL: https://ccr.sigcomm.org/online/files/p83-keshavA.pdf. TODO: verify source; the PDF URL was not accessible in this environment.
- **How to do Research At the MIT AI Lab** — David Chapman, editor, 1988. MIT AI Lab Working Paper 316. Summary: practical advice on research skills, writing, programming, advisors, and graduate research life. Relevance: it treats research as a set of habits and practices. Source URL: https://dspace.mit.edu/bitstream/handle/1721.1/41487/AI_WP_316.pdf. TODO: verify source; the PDF URL was not accessible in this environment.
- **Ten Simple Rules for Graduate Students** — Jenny Gu and Philip E. Bourne, 2007. PLOS Computational Biology. Summary: practical rules for graduate research, mentoring, focus, and professional development. Relevance: it connects project choice, independence, hypothesis focus, and feedback. DOI: https://doi.org/10.1371/journal.pcbi.0030229
- **Some Modest Advice for Graduate Students** — Stephen C. Stearns, source page at Yale. Summary: direct advice on ownership, planning for failure, and knowing why work matters. Relevance: useful as pragmatic advice; it carries the weight of advice, not peer-reviewed research-methodology evidence. Source URL: https://stearnslab.yale.edu/modest-advice

### Scientific Integrity and Reproducibility

- **A manifesto for reproducible science** — Marcus R. Munafò et al., 2017. Nature Human Behaviour. Summary: argues for methods, reporting, dissemination, reproducibility, evaluation, and incentives that improve reliability. Relevance: evidence quality and transparency determine whether claims should be trusted. DOI: https://doi.org/10.1038/s41562-016-0021
