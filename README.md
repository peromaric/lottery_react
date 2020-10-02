React App for interacting with the lottery smart contract

web3.js :
web3 instance created via metamask's provider, used to interact with the smart contract on ropsten network

Issues:
It's not optimal. Does not take into consideration the possibility of the user using another version of metamask. However, for practicing purposes, it does a fine job. It would be nice if it reloaded when the user switches to another metamask account, but I'll skip that functionality for now.

lottery.js:
Creates a contract instance with web3 instance loaded from web3.js. Stores the contract address and abi for interacting with the contract.

Issues:
There's an annoying issue with the abi. Originally, I copy pasted the abi I got by console loging the abi of the contract instance in a testing environment. However, for some reason, it doesn't work with that abi format. I solved this issue by using JSON.stringify on that object. There's probably other ways around that, the easiest one would be getting the abi from Remix.

