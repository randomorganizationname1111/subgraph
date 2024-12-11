import { SponsoredPaymasterTransaction as SponsoredPaymasterTransactionEvent } from "../generated/MyPaymaster/MyPaymaster"
import { SponsoredPaymasterTransaction } from "../generated/schema"

export function handleSponsoredPaymasterTransaction(
  event: SponsoredPaymasterTransactionEvent
): void {
  let entity = new SponsoredPaymasterTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requiredEth = event.params.requiredEth
  entity.userAddress = event.params.userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
