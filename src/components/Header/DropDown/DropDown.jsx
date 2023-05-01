import "./dropDown.css";
import { useState, useRef} from "react";


export const DropDown = () => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const [itemsList, setItemList] = useState([
        {
            name: "UZ",
            img: "🇺🇿",
            value: "UZ"
        },
        {
            name: "RU",
            img: "🇷🇺",
            value: "RU"
        }
    ]);

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const dropRef = useRef();
    const menuRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target !== dropRef.current && e.target !== menuRef.current) {
            setIsDropDownVisible(false)
        }
    })


  return (
    <div className='dropdown'>
        <div className="dropdown-selection" ref={dropRef} onClick={e => {
            setIsDropDownVisible(!isDropDownVisible);
        }}>
            {selectedItemIndex !== null ? itemsList[selectedItemIndex].value : "RU"}

            <i class="bi bi-chevron-down" onClick={e => {
            setIsDropDownVisible(!isDropDownVisible)}}></i>
        </div>

        {
            isDropDownVisible ? (
                <div className="items-holder" ref={menuRef}>
                {
                    itemsList.map((item, index) => {
                        return (
                            <div key={item.value} className="dropdown-item" onClick={e => {
                                setSelectedItemIndex(index);
                                setIsDropDownVisible(false);
                            }}>
                                {item.name} {item.img}
                            </div>
                        )
                    })
                }
                </div>
            ) : <></>
        }
    </div>
  )
}