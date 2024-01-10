import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameCardSkeletons = () => {
  return (
    <div>
       <Card width='300px'>
        <Skeleton height="200px">
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Skeleton>
      </Card>
    </div>
  )
}

export default GameCardSkeletons

