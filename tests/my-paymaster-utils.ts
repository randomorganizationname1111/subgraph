import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { SponsoredPaymasterTransaction } from "../generated/MyPaymaster/MyPaymaster"

export function createSponsoredPaymasterTransactionEvent(
  requiredEth: BigInt,
  userAddress: Address
): SponsoredPaymasterTransaction {
  let sponsoredPaymasterTransactionEvent =
    changetype<SponsoredPaymasterTransaction>(newMockEvent())

  sponsoredPaymasterTransactionEvent.parameters = new Array()

  sponsoredPaymasterTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "requiredEth",
      ethereum.Value.fromUnsignedBigInt(requiredEth)
    )
  )
  sponsoredPaymasterTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )

  return sponsoredPaymasterTransactionEvent
}
