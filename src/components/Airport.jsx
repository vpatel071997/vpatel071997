
import { Suspense } from 'react'
import Model from './Model'

const Airport = () => {
    return (
        <Suspense fallback={null}>
            <Model
                path='/models/airport.gltf'
                scale={1}
                position={[0, 0.5, 0]}
            />
        </Suspense>
    )
}

export default Airport
