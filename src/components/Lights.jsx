const Lights = () => {
    return (
        <>
            <ambientLight color={0x404040} />
            <directionalLight
                color={0xffffff}
                intensity={0.5}
                castShadow={true}
            />
        </>
    )
}

export default Lights
