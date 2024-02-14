/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Donation, DonationInterface } from "../../contracts/Donation";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "donateId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Donated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "donateId",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeFundSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAllDonates",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "withdrawDonates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ea0806100206000396000f3fe6080604052600436106100915760003560e01c8063ddca3f4311610059578063ddca3f4314610136578063e941fa7814610161578063f14faf6f14610178578063f2fde38b14610194578063fe4b84df146101bd57610091565b806343be51dd14610096578063715018a6146100a05780638652ae8b146100b75780638da5cb5b146100e2578063ae8f3fcd1461010d575b600080fd5b61009e6101e6565b005b3480156100ac57600080fd5b506100b561022f565b005b3480156100c357600080fd5b506100cc610243565b6040516100d99190610a80565b60405180910390f35b3480156100ee57600080fd5b506100f7610255565b6040516101049190610adc565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190610b28565b61028d565b005b34801561014257600080fd5b5061014b6103ab565b6040516101589190610a80565b60405180910390f35b34801561016d57600080fd5b506101766103b1565b005b610192600480360381019061018d9190610b28565b61041c565b005b3480156101a057600080fd5b506101bb60048036038101906101b69190610b81565b610503565b005b3480156101c957600080fd5b506101e460048036038101906101df9190610b28565b610589565b005b61022d6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461028d565b565b61023761071f565b61024160006107a6565b565b600061024d61071f565b600254905090565b60008061026061087d565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6102956108a5565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030d90610c31565b60405180910390fd5b60008111610359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035090610c9d565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561039f573d6000803e3d6000fd5b506103a86108fc565b50565b60015481565b6103b961071f565b6103c16108a5565b3373ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f19350505050158015610409573d6000803e3d6000fd5b50600060028190555061041a6108fc565b565b6064600154606461042d9190610cec565b346104389190610d20565b6104429190610d91565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461048f9190610dc2565b925050819055506064600154346104a69190610d20565b6104b09190610d91565b600260008282546104c19190610dc2565b92505081905550807f3f2a7eec90b377537d640acdf78c4ffc072aec2431c1057ea33245c8f3255ce4346040516104f89190610a80565b60405180910390a250565b61050b61071f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361057d5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016105749190610adc565b60405180910390fd5b610586816107a6565b50565b6000610593610915565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156105e15750825b9050600060018367ffffffffffffffff16148015610616575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610624575080155b1561065b576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156106ab5760018560000160086101000a81548160ff0219169083151502179055505b856001819055506106bb3361093d565b83156107175760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2600160405161070e9190610e4f565b60405180910390a15b505050505050565b610727610951565b73ffffffffffffffffffffffffffffffffffffffff16610745610255565b73ffffffffffffffffffffffffffffffffffffffff16146107a457610768610951565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161079b9190610adc565b60405180910390fd5b565b60006107b061087d565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b60006108af610959565b905060028160000154036108ef576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002816000018190555050565b6000610906610959565b90506001816000018190555050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b610945610981565b61094e816109c1565b50565b600033905090565b60007f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00905090565b610989610a47565b6109bf576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6109c9610981565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a3b5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a329190610adc565b60405180910390fd5b610a44816107a6565b50565b6000610a51610915565b60000160089054906101000a900460ff16905090565b6000819050919050565b610a7a81610a67565b82525050565b6000602082019050610a956000830184610a71565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ac682610a9b565b9050919050565b610ad681610abb565b82525050565b6000602082019050610af16000830184610acd565b92915050565b600080fd5b610b0581610a67565b8114610b1057600080fd5b50565b600081359050610b2281610afc565b92915050565b600060208284031215610b3e57610b3d610af7565b5b6000610b4c84828501610b13565b91505092915050565b610b5e81610abb565b8114610b6957600080fd5b50565b600081359050610b7b81610b55565b92915050565b600060208284031215610b9757610b96610af7565b5b6000610ba584828501610b6c565b91505092915050565b600082825260208201905092915050565b7f796f7520646f6e277420686176652066756e647320666f72207769746864726160008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b6000610c1b602183610bae565b9150610c2682610bbf565b604082019050919050565b60006020820190508181036000830152610c4a81610c0e565b9050919050565b7f76616c756520666f722077697468647261772073686f756c64206265203e2030600082015250565b6000610c87602083610bae565b9150610c9282610c51565b602082019050919050565b60006020820190508181036000830152610cb681610c7a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cf782610a67565b9150610d0283610a67565b9250828203905081811115610d1a57610d19610cbd565b5b92915050565b6000610d2b82610a67565b9150610d3683610a67565b9250828202610d4481610a67565b91508282048414831517610d5b57610d5a610cbd565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d9c82610a67565b9150610da783610a67565b925082610db757610db6610d62565b5b828204905092915050565b6000610dcd82610a67565b9150610dd883610a67565b9250828201905080821115610df057610def610cbd565b5b92915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000610e39610e34610e2f84610df6565b610e14565b610e00565b9050919050565b610e4981610e1e565b82525050565b6000602082019050610e646000830184610e40565b9291505056fea26469706673582212203eaeb77e1b83d3f981e2a9aaee49e944349371879fe0b8c6cc92cb88a9e7eb7164736f6c63430008180033";

type DonationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Donation__factory extends ContractFactory {
  constructor(...args: DonationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Donation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Donation__factory {
    return super.connect(runner) as Donation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationInterface {
    return new Interface(_abi) as DonationInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Donation {
    return new Contract(address, _abi, runner) as unknown as Donation;
  }
}