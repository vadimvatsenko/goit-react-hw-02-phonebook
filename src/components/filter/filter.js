import React from "react";
import style from './filter.module.scss';
import { nanoid } from 'nanoid';

const idForFilter = nanoid();

export default function Filter({value, onChange}) {
    return (
        <form className={style.filter__form}> 
            <label htmlFor={idForFilter} className={style.filter__title}>Find contact by name</label>
            <input className={style.filter__input } id={ idForFilter} type="text" name="filter" value={value} onChange={onChange } />
        </form>
    )
}