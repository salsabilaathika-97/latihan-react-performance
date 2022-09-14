import {memo} from "react";

const Son = () => {
    console.log("Komponen anak laki-laki");
    return (
        <div>
            <h1>Boy</h1>
        </div>
    )
}

export default memo(Son);