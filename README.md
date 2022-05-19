# secrets2env
Github Action to export all repo's secrets to environment variables without knowing their names.

## Usage

```
    steps:
      - uses: sljeff/secrets2env@main
        with:
          secrets-json: ${{ toJson(secrets) }}
      - name: Print Secrets
        run: |
          echo $TEST_SECRET_1  # hello
```
