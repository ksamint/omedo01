<!-- ksamint-policy-pointer v1 -->
> **Global agent policy:** this repository follows ksamint ADR-0000 (claudememo01 `global/AGENT-POLICY.md`):
> TypeScript first, Rust first (no new JS) · no CI runners (no GitHub Actions, hosted or self-hosted) · validate locally on the
> exact tree · the agent merges on green local validation · deploy directly from the local deploy machine with automatic
> rollback · hard limits on shared infrastructure, secrets and product rules. Stricter safety rules below still apply.
<!-- /ksamint-policy-pointer -->

@AGENTS.md
