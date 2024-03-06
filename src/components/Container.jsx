function Container(props) {
    return (
      <div className="mx-auto sm:w-3/5 sm:px-6 lg:px-8 py-8 pb-20 p-2">
          {props.children}
      </div>
    )
  }
  
  export default Container