import React from 'react'
import './SquareRepos.css'


function SquareRepos(props) {
   
    const reposLists=props.info.map((data,i)=>
      <div className='box'>
              <li key={i} className="repo-items">{data.name}</li>
              <a href={data.html_url}><button key={i} className="button-20">click me</button></a>
</div>
    )
  return (
    <div className="repos">
       
       {reposLists}
       
    </div>
  )
}

export default SquareRepos