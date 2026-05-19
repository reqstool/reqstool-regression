# reqstool-regression

Monorepo of test fixtures for [reqstool-client](https://github.com/reqstool/reqstool-client). Exercises every code path in reqstool's parsing, import resolution, statistics computation, and report generation.

Related issues: [reqstool-client#387](https://github.com/reqstool/reqstool-client/issues/387) (design RFC)

## Layout

```
reqstool-regression/
├── fixtures/
│   ├── parent/          Parent layer (urn: reqstool-regression)
│   │   ├── base-a/      Grandparent sub-source (urn: regression-base-a)
│   │   └── base-b/      Grandparent sub-source (urn: regression-base-b)
│   └── ecosystems/
│       ├── java/        Java ecosystem wrapper (urn: regression-java)        [reqstool-client#327]
│       ├── python/      Python ecosystem wrapper (urn: regression-python)    [reqstool-client#326]
│       └── typescript/  TypeScript ecosystem wrapper (urn: regression-typescript) [reqstool-client#385]
├── docs/
└── README.md
```

**Entry-point behavior:**
- `reqstool status local -p fixtures/parent` — aggregated view across all ecosystem wrappers
- `reqstool status local -p fixtures/ecosystems/python` (or `java`, `typescript`) — single-ecosystem view

Ecosystem wrappers are **byte-equivalent in structure**: same REQ/SVC/MVR IDs, same test-outcome pattern, same `annotations.yml` key shape. Only language-specific FQNs and source files differ.

## Parent layer — enum coverage matrix

### Requirements

| ID | Layer | Title | Significance | Lifecycle | Categories | Implementation |
|----|-------|-------|-------------|-----------|------------|---------------|
| `REQ_A01` | base-a | Base functional requirement | **shall** | effective | functional-suitability | in-code |
| `REQ_A02` | base-a | Base safety requirement | **should** | effective | safety | **N/A** |
| `REQ_B01` | base-b | Performance measurement requirement | **may** | effective | performance-efficiency | in-code |
| `REQ_B02` | base-b | Compatibility requirement (filtered) | shall | effective | compatibility | in-code |
| `REQ_001` | parent | Reliability requirement | **shall** | **effective** | reliability | in-code |
| `REQ_002` | parent | Security requirement | **may** | **draft** | security | **N/A** |
| `REQ_003` | parent | Maintainability requirement | **should** | **deprecated** | maintainability | in-code |
| `REQ_004` | parent | Flexibility requirement | shall | **obsolete** | flexibility | in-code |

**Coverage:** all 3 significance levels (`shall`, `should`, `may`), all 4 lifecycle states (`effective`, `draft`, `deprecated`, `obsolete`), 7 of 9 categories at parent+grandparent level, both implementation types (`in-code`, `N/A`).

> `REQ_B02` is excluded from the parent via an import filter (`filters.regression-base-b.requirement_ids.excludes`), testing filter mechanics.

### SVCs (parent + grandparent)

| ID | Layer | Requirement IDs | Verification | Lifecycle |
|----|-------|----------------|-------------|-----------|
| `SVC_A01` | base-a | REQ_A01 | **automated-test** | effective |
| `SVC_A02` | base-a | REQ_A02 | **manual-test** | effective |
| `SVC_B01` | base-b | REQ_B01 | **automated-test** | effective |
| `SVC_001` | parent | REQ_001 | **automated-test** | effective |
| `SVC_002` | parent | REQ_001, regression-base-a:REQ_A01 | **manual-test** | effective |
| `SVC_003` | parent | REQ_002 | **review** | effective |
| `SVC_004` | parent | REQ_003 | automated-test | **deprecated** |
| `SVC_005` | parent | REQ_004 | **platform** | **obsolete** |
| `SVC_006` | parent | regression-base-a:REQ_A02 | **other** | effective |
| `SVC_007` | parent | regression-base-b:REQ_B01 | automated-test | effective |
| `SVC_008` | parent | REQ_003 | automated-test | effective |

**Coverage:** all 5 verification types (`automated-test`, `manual-test`, `review`, `platform`, `other`), cross-URN references at parent and grandparent depth.

Each ecosystem wrapper adds 3 local SVCs (`SVC_L01`–`SVC_L03`) covering the wrapper's own local requirements.

### Test outcomes (per ecosystem wrapper)

All ecosystem tests pass. FAIL / SKIP / MISSING edge cases are covered by the inline fixtures in `reqstool-client/tests/fixtures/`.

### MVRs

| ID | SVC IDs | Pass |
|----|---------|------|
| `MVR_A01` | SVC_A02 | true |
| `MVR_001` | SVC_002 | true |
| `MVR_002` | SVC_002 | false |

## Publishing

Ecosystem wrappers publish only to the **GitHub Packages registry of this repo** — never to public registries (PyPI, Maven Central, npm). These are test fixtures.

- Java → Maven (GH Packages), classifier `reqstool` — see [reqstool-client#388](https://github.com/reqstool/reqstool-client/issues/388)
- TypeScript → npm (GH Packages) — see [reqstool-client#389](https://github.com/reqstool/reqstool-client/issues/389)
- Python → under investigation (GH Packages doesn't host PyPI) — see [reqstool-client#390](https://github.com/reqstool/reqstool-client/issues/390)
