Use template helpers to determine if you are in development or production

## Examples:

```language-html
  {{#if isProdEnvironment}}
    <div class="warning-message">This site is not ready yet. This is a demo. All data and user accounts will be removed on a regular basis.</div>
  {{/if}}
```

```language-html
  {{#if isDevEnvironment}}
    <div class="info-box">Number of user's logged in: {{loggedInUsersNum}}</div>
  {{/if}}
```