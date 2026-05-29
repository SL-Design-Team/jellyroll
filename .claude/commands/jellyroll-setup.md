---
name: jellyroll-setup
description: "One-time setup for the JellyRoll skill. Adds the curl permission needed to fetch live design tokens from sl-design-team.github.io to the user's global Claude Code settings. Run this once before using /jellyroll for the first time."
---

# JellyRoll Setup

Add the one-time permission that lets `/jellyroll` fetch live design tokens without a permission prompt.

## Steps

1. Read `~/.claude/settings.json` (create it as `{}` if it does not exist)
2. Check whether `"Bash(curl -s https://sl-design-team.github.io/jellyroll/*)"` already appears in the `permissions.allow` array
3. If it is already present, report: "Already configured — /jellyroll is ready to use." and stop
4. If it is missing, add it to `permissions.allow` (creating the `permissions` object and `allow` array if needed), preserving all other existing settings
5. Save the file
6. Confirm: "Done — /jellyroll can now fetch live tokens without prompting. Run /jellyroll to get started."
