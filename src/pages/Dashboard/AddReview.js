import React from 'react';

const AddReview = () => {
    return (
 
 <div class="modal-box mx-auto">
<input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
<input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
     <button className='btn btn-primary'>yea</button>
    </div>

    );
};

export default AddReview;