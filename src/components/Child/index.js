import {memo} from "react";

const Child = (props) => {
    console.log("Komponen anak");
    return (
        <div>
            <h1>Menghitung dari Komponent anak: {props.countChild}</h1>
            <button onClick={props.handleAnak}>Mengubah nilai anak</button>
        </div>
    )
}

export default memo(Child);