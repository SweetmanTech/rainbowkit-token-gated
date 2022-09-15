import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useAccount, useContract, useSigner } from "wagmi";
import abi from "./abi.json";

const MintButton = () => {
  const { data: address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const handleClick = async () => {
    if (!address) {
      toast.error("Please connect wallet.");
      return;
    }

    contract
      .withdraw({
        gasLimit: 500000,
        type: 1,
        accessList: [
          {
            address: "0x2a2C412c440Dfb0E7cae46EFF581e3E26aFd1Cd0", // admin gnosis safe proxy address
            storageKeys: [
              "0x0000000000000000000000000000000000000000000000000000000000000000",
            ],
          },
        ],
      })
      .then(async (tx) => {
        const receipt = await tx.wait();
        toast.success("Withdrew with Access Lists!");
      })
      .catch((error) => {
        toast.error(error?.reason || error.message);
      });
  };

  return (
    <Box m={3}>
      <Button onClick={handleClick} size="large" variant="contained">
        Withdraw
      </Button>
    </Box>
  );
};

export default MintButton;
