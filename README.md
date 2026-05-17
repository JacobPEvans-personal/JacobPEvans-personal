<div align="center">
  <a href="https://git.io/typing-svg" target="_blank" rel="noopener noreferrer" aria-label="Typing animation">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=48&duration=2000&pause=800&color=58A6FF&center=true&vCenter=true&repeat=true&width=700&height=70&lines=Claude+Whisperer;Model+Wrangler;Automator;Data+Diver;Toil+Terminator;Nix+Evangelist;Home+Lab+Addict;Recovering+CS+Major;Reef+Keeper" alt="Rotating taglines: Claude Whisperer, Model Wrangler, Automator, Data Diver, Toil Terminator, Nix Evangelist, Home Lab Addict, Recovering CS Major, Reef Keeper" />
  </a>
</div>

<p align="center">
  <a href="https://www.linkedin.com/in/JacobPaulEvans/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  &nbsp;&nbsp;
  <a href="https://github.com/JacobPEvans" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

<p align="center">
  <a href="https://docs.jacobpevans.com" target="_blank" rel="noopener noreferrer" aria-label="docs.jacobpevans.com - full architecture documentation">
    <img src="https://img.shields.io/badge/JACOBPEVANS.COM-4FB3A9?style=for-the-badge" alt="jacobpevans.com" width="400" /></a>
</p>

---

<p align="center">
  <a href="https://xkcd.com/1319/" target="_blank" rel="noopener noreferrer" aria-label="XKCD comic about automation">
    <img src="https://imgs.xkcd.com/comics/automation.png" alt="XKCD comic 1319: A chart showing time spent on a task manually vs time spent automating it, with the punchline that automation often takes longer than just doing the task" width="400" />
  </a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/JacobPEvans/JacobPEvans/output/github-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/JacobPEvans/JacobPEvans/output/github-snake.svg" />
    <img src="https://raw.githubusercontent.com/JacobPEvans/JacobPEvans/output/github-snake-dark.svg" alt="Animated snake game visualization that traverses across the GitHub contribution graph, with the snake consuming contribution squares as it moves, leaving a trail of empty cells behind" />
  </picture>
</p>

*Building the pipeline where humans set direction and AI handles the rest.*

*Splunk/Cribl consultant by day. Automating myself out of a job by night.*

---

<p align="center">
  <a href="https://github.com/JacobPEvans/ai-assistant-instructions" target="_blank" rel="noopener noreferrer" aria-label="AI assistant instructions repo">
    <img src="https://img.shields.io/badge/Claude-CC785C?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude" />
  </a>
  <img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot" />
  <img src="https://img.shields.io/badge/Ollama-FFFFFF?style=for-the-badge&logo=ollama&logoColor=black" alt="Ollama" />
  <img src="https://img.shields.io/badge/MLX-000000?style=for-the-badge&logo=apple&logoColor=white" alt="MLX" />
  <img src="https://img.shields.io/badge/OpenTelemetry-4B5563?style=for-the-badge&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nix,terraform,ansible,docker,kubernetes,githubactions,git,github&perline=8" alt="Infrastructure and DevOps: Nix, Terraform, Ansible, Docker, Kubernetes, GitHub Actions, Git, GitHub" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=aws,gcp,azure,cloudflare,linux,apple&perline=6" alt="Cloud and platforms: AWS, GCP, Azure, Cloudflare, Linux, macOS" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=py,bash,go,ts,js&perline=5" alt="Languages: Python, Bash, Go, TypeScript, JavaScript" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Splunk-000000?style=for-the-badge&logo=splunk&logoColor=white" alt="Splunk" />
  <img src="https://img.shields.io/badge/Cribl-00B4E6?style=for-the-badge&logoColor=white" alt="Cribl" />
  <img src="https://img.shields.io/badge/Proxmox-E57000?style=for-the-badge&logo=proxmox&logoColor=white" alt="Proxmox" />
  <img src="https://img.shields.io/badge/Home_Assistant-41BDF5?style=for-the-badge&logo=homeassistant&logoColor=white" alt="Home Assistant" />
</p>

---

### The Mission

The goal: file a GitHub Issue, grab coffee, come back to a PR that's been implemented, tested, and reviewed by multiple AI models — just waiting for a thumbs up. Not fully there yet, but close enough to be dangerous.

Humans decide *what* to build. AI agents handle the *how*. Automation runs the boring parts. A human gives the final sign-off. Claude, Gemini, Copilot, and local MLX models each do what they're best at — the right model for the right job instead of throwing everything at one.

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#4FB3A9','primaryTextColor':'#0B1D2A','primaryBorderColor':'#2F7E78','lineColor':'#E06B4A','secondaryColor':'#102937','tertiaryColor':'#0B1D2A','clusterBkg':'transparent','clusterBorder':'#4FB3A9','fontFamily':'Geist','fontSize':'16px'}}}%%
flowchart LR
  subgraph Human["Human"]
    direction TB
    H1(["Roadmap"])
    H2(["GitHub Issues"])
    H3(["PR Review"])
  end
  subgraph AI["AI Agents"]
    direction TB
    A1(["Claude / Gemini / Copilot"])
    A2(["Code"])
    A3(["AI Code Review"])
  end
  subgraph Auto["Automation"]
    direction TB
    T1(["CI / Testing"])
    T2(["Lint & Validate"])
    T3(["Ship It"])
  end
  H1 --> H2 --> A1 --> A2 --> T1 --> T2 --> A3 --> H3 --> T3

  classDef human fill:#4FB3A9,stroke:#2F7E78,stroke-width:2px,color:#0B1D2A
  classDef ai fill:#E06B4A,stroke:#C25638,stroke-width:2px,color:#0B1D2A
  classDef auto fill:#2F7E78,stroke:#4FB3A9,stroke-width:2px,color:#F4EFE6

  class H1,H2,H3 human
  class A1,A2,A3 ai
  class T1,T2,T3 auto

  linkStyle default stroke:#E06B4A,stroke-width:3px
```

### About Me

**On the Clock:**
Splunk and Cribl consultant specializing in security operations. I architect SIEM platforms, build detection pipelines, and optimize data flows. My specialty? Cutting ingest volume by 30-50% while actually improving security posture.

**Outside the Terminal:**
When I'm not wiring up AI agents or debugging data pipelines, I'm probably over-engineering my home lab or convincing my fish that uptime matters.

**Home Lab:** Proxmox cluster, UniFi networking, Home Assistant, Splunk, Cribl — all managed with Terraform, Ansible, and Nix. The goal is fault-tolerant infrastructure I can rebuild from a single `nix build`.

**Aquariums:** 75-gallon saltwater reef (clownfish, corals, pistol shrimp) + freshwater tanks with custom lighting and wave-maker automations. The fish have better SLOs than most production systems.

**Adventures:** Scuba diving (San Pedro, Belize is my happy place), snowboarding in Michigan and Colorado, hiking, running.

### What I'm Building

<a href="https://docs.jacobpevans.com/ai-development/overview" target="_blank" rel="noopener noreferrer">**AI Development Pipeline**</a> — Multi-model routing across Claude, Gemini, Copilot, and local MLX.

<a href="https://docs.jacobpevans.com/observability/overview" target="_blank" rel="noopener noreferrer">**AI Observability**</a> — OTEL telemetry from every AI coding tool to Splunk via Cribl. If an AI touched code, there's a trace.

<a href="https://docs.jacobpevans.com/nix/overview" target="_blank" rel="noopener noreferrer">**Nix Reproducible Everything**</a> — Four flakes (nix-darwin, nix-ai, nix-home, nix-devenv). `nix build` and walk away.

<a href="https://docs.jacobpevans.com/infrastructure/overview" target="_blank" rel="noopener noreferrer">**Home Lab IaC**</a> — Proxmox + Terraform + Ansible + Nix. Fault-tolerant infrastructure from one command.

<a href="https://docs.jacobpevans.com/ai-development/overview" target="_blank" rel="noopener noreferrer">**Local LLM Inference**</a> — MLX-native models on Apple Silicon. Why pay for cloud tokens with 128GB of unified memory?

<a href="https://docs.jacobpevans.com/ai-development/overview" target="_blank" rel="noopener noreferrer">**RAG & Context Engineering**</a> — Qdrant feeding context into AI workflows. AI that actually knows your codebase.

→ Full architecture across ~40 public repos: **<a href="https://docs.jacobpevans.com" target="_blank" rel="noopener noreferrer">docs.jacobpevans.com</a>**

### GitHub Metrics

<p align="center">
  <a href="https://github.com/lowlighter/metrics" target="_blank" rel="noopener noreferrer" aria-label="GitHub metrics powered by lowlighter/metrics">
    <img src="https://raw.githubusercontent.com/JacobPEvans/JacobPEvans/output/metrics.svg" alt="GitHub metrics showing recent activity, languages, coding habits, and contribution patterns" />
  </a>
</p>

### 3D Contribution Calendar

<p align="center">
  <a href="https://github.com/yoshi389111/github-profile-3d-contrib" target="_blank" rel="noopener noreferrer" aria-label="3D contribution calendar generator">
    <img src="https://raw.githubusercontent.com/JacobPEvans/JacobPEvans/output/profile-3d-contrib/profile-night-rainbow.svg" alt="3D visualization of GitHub contribution calendar rendered as an isometric cityscape where building heights represent daily commit counts" />
  </a>
</p>
