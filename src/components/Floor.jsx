import { usePlane } from 'use-cannon';
import Airport from './Airport';

const Floor = props => {
    const [ref] = usePlane(() => ({ args: [20, 1, 10], ...props }))
    return (
        <mesh ref={ref} {...props} receiveShadow>
            <Airport />
            <boxBufferGeometry args={[200, 1, 200]} />
            <meshPhysicalMaterial color={'#2B65EC'} opacity={1} />
        </mesh>
    )
}

export default Floor;
