import React from 'react'

export default function Additem({newItem, setNewItem, submit}) {
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
  <div className="mb-3">
    <label>Add item</label>
    <input   type="text" className="form-control" id="" aria-describedby="emailHelp" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>

  </div>

  <button type="submit" className="btn btn-primary">Add item</button>
</form>
<hr/>
        </div>
    )
}
