const Child = (props) => {
    console.log("Komponen anak");
    return (
        <div>
            <h1>Menghitung dari Komponent anak: {props.countChild}</h1>
        </div>
    )
}

export default Child;