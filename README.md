### Deployed

API URL: https://api.studio.thegraph.com/query/98033/myerc20paymaster/version/latest

Tx: https://sepolia.arbiscan.io/tx/0x4551df1448f45639b4887aeed6b33a8a650fa33865454e8ced887587920f3e2c


### Sample request

```js
import { gql, request } from 'graphql-request'
const query = gql`{
  sponsoredPaymasterTransactions(first: 5) {
    id
    requiredEth
    userAddress
    blockNumber
  }
}`
const url = 'https://api.studio.thegraph.com/query/98033/myerc20paymaster/version/latest'
async function fetchSubgraphData() {
  return await request(url, query)
}
fetchSubgraphData().then((data) => console.log({data})).catch(console.error)
```