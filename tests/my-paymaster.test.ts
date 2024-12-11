import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { SponsoredPaymasterTransaction } from "../generated/schema"
import { SponsoredPaymasterTransaction as SponsoredPaymasterTransactionEvent } from "../generated/MyPaymaster/MyPaymaster"
import { handleSponsoredPaymasterTransaction } from "../src/my-paymaster"
import { createSponsoredPaymasterTransactionEvent } from "./my-paymaster-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requiredEth = BigInt.fromI32(234)
    let userAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newSponsoredPaymasterTransactionEvent =
      createSponsoredPaymasterTransactionEvent(requiredEth, userAddress)
    handleSponsoredPaymasterTransaction(newSponsoredPaymasterTransactionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SponsoredPaymasterTransaction created and stored", () => {
    assert.entityCount("SponsoredPaymasterTransaction", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SponsoredPaymasterTransaction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requiredEth",
      "234"
    )
    assert.fieldEquals(
      "SponsoredPaymasterTransaction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
