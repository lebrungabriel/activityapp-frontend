import { Skeleton, Stack } from "@chakra-ui/react";

type Props = {};

const LoadingSkeleton = (props: Props) => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default LoadingSkeleton;
