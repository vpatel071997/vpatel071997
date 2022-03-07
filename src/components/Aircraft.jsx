
import { Suspense } from 'react'
import Model from './Model'

const Aircraft = () => {
    return (
        <Suspense fallback={null}>
            <Model
                path='/models/b737.gltf'
                scale={1}
            />
        </Suspense>
    )
}

export default Aircraft
