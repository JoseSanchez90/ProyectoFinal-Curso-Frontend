function Container(props) {
    return (
      <div className="mx-auto max-w-screen sm:px-6 lg:px-8 py-10 min-h-dvh ">
          {props.children}
      </div>
    )
  }
  
  export default Container