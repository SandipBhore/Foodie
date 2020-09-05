import Style from "./FilterSidebar.module.scss";
import cx from 'classnames'
import Sidebar from "../Sidebar";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCuisines } from "../../../Redux";

const CheckBox = props => {
  return (
    <li>
     <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} name={props.name} /> {props.name}
    </li>
  )
}

function FilterSideBar({ userData, fetchCuisines, onFilters }) {
  const [search, setSearch] = useState("");
  const [filterCheckBoxes, setFilterCheckBoxes] = useState();
  const [Preference, setPreference] = useState([
    { id: 1, name: "Veg", value: "veg", isChecked: false },
    { id: 2, name: "Non-Veg", value: "nonveg", isChecked: false },
  ]);
  const [sort, setSort] = useState([
    {
      id: 3,
      name: "Popularity - high to low",
      value: "Popularity",
      isChecked: false,
    },
    {
      id: 4,
      name: "Rating - high to low",
      value: "sort=rating&amp;order=desc",
      isChecked: false,
    },
    {
      id: 5,
      name: "Cost-high to low",
      value: "sort=cost&amp;order=desc",
      isChecked: false,
    },
    {
      id: 6,
      name: "Cost-low to high",
      value: "sort=cost&amp;order=asc",
      isChecked: false,
    },
  ]);
  
  const cuisines = userData.cuisines && userData.cuisines!==[] && Object.assign([],userData.cuisines.map(data =>(
    {id: data.cuisine.cuisine_id, name:data.cuisine.cuisine_name, value: data.cuisine.cuisine_id, isChecked: false})));

  const [filteredCuisines, setFilteredCuisines] = useState(cuisines);

  const url = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${userData.entityId}`;

  useEffect(() => {
      fetchCuisines(url);
  }, []);

  const onFilterChange = e => {
    let name,id,checked;
    // console.log(e);
    if (e !== undefined){
      name = e.target.name;
      id = e.target.value;
      checked =e.target.checked;
    }
    let fruites = Preference
    fruites.forEach(fruite => {
       if (fruite.value === id)
          fruite.isChecked =  checked
    })
    setPreference(Preference)

    let sortby = sort
    sortby.forEach(fruite => {
       if (fruite.value === id)
          fruite.isChecked =  checked
    })
    setSort(sortby)
    
    let cusineCheck = filteredCuisines
    cusineCheck.forEach(obj => {
       if (obj.name === name)
          obj.isChecked =  checked
    })
    setFilteredCuisines(cusineCheck)

    let updatedFilterbox = Object.assign({}, filterCheckBoxes, { [name]: id });
    setFilterCheckBoxes(updatedFilterbox);
  };

  const handleAllChecked = e => {
    let fruites = Preference
    fruites.forEach(fruite => fruite.isChecked = false)
    setPreference(Preference)

    let sortby = sort
    sortby.forEach(filter => filter.isChecked = false)
    setSort(sortby)
    
    let cusineCheck = filteredCuisines
    cusineCheck.forEach(filter => filter.isChecked = false)
    setFilteredCuisines(cusineCheck)
  };

  const onSubmit = e => {
    onFilters(filterCheckBoxes);
  };

  const onChange = e => {
    setSearch(e.target.value);
    setFilteredCuisines(cuisines.filter(data => {
      return (
        data.name.toLowerCase().indexOf(search.toLowerCase()) !==
        -1
      )
    }));
  };

  return (
    <Sidebar width={300} height={"100vh"} >
      <div className={Style.main} >
      <p className={Style.p}>Preference</p>
      <ul className={Style.ul}>
        {
          Preference.map((fruite) => {
            return (<CheckBox key={fruite.id} handleCheckChieldElement={onFilterChange}  {...fruite} />)
          })
        }
      </ul>
      <p className={Style.p}>Cuisines</p>
      <input
        className={cx(Style.filter,Style.inputs)}
        type="text"
        name="query"
        onChange={onChange}
        value={search}
        placeholder="Search Cuisines"
      />
      <ul className={cx(Style.ul,Style.cuisines)}>
        {
         cuisines && filteredCuisines!==[] && filteredCuisines.map((fruite) => {
            return (<CheckBox key={fruite.id} handleCheckChieldElement={onFilterChange}  {...fruite} />)
          })
        }
      </ul>
      <p className={Style.p}>Sort By</p>
      <ul className={Style.ul}>
        {
          sort.map((fruite) => {
            return (<CheckBox key={fruite.id} handleCheckChieldElement={onFilterChange}  {...fruite} />)
          })
        }
      </ul>
      <div className={Style.filterBottom}>
        <button className="btn btn-primary" onClick={(e)=>{handleAllChecked(e);onFilterChange(e)}}>
          Clear
        </button>
        <button className="btn btn-primary" onClick={onSubmit}>
          Apply
        </button>
      </div>
      </div>
    </Sidebar>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCuisines: url => dispatch(fetchCuisines(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSideBar);
