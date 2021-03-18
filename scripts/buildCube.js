miniCubeModel.flat().forEach((curMiniCube, indexMiniCube) => {
    const miniCube = document.createElement('div');
    miniCube.id = curMiniCube.name;
    miniCube.className = "cubic__mini";

    const { x: xTranf, y: yTranf, z: zTranf } = curMiniCube.position;

    miniCube.style.transform = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px)`;

    curMiniCube.faces.forEach((currentface, index) => {
        const face = document.createElement('div');
        face.id = currentface.id;
        face.className = `cubic__face cubic__face--${currentface.label}`

        if (currentface.value) {
            face.innerHTML =   miniCube.id + " " + currentface.label ;
            face.classList.add(`cubic__face--${currentface.value}`)
        }

        miniCube.appendChild(face)
    });

    $cubic.appendChild(miniCube);
})