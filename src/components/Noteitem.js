import React from 'react'

const Noteitem = (props) => {
 const {note} = props;
    return (
    <div className='col-md-3'>
        <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi modi deserunt eligendi non. Repudiandae, maxime doloremque dolorem ut totam vel nihil! Vero quibusdam in, harum libero quas alias necessitatibus, architecto natus totam, sed omnis delectus quidem deleniti voluptatum. Nam, quos neque recusandae quia accusantium sapiente impedit totam ad repudiandae natus aliquid nisi minima fuga suscipit aliquam similique aperiam, numquam asperiores corporis est ea ex sequi? Voluptates unde molestias provident maxime qui recusandae delectus neque animi sed, optio temporibus perferendis architecto. Necessitatibus facere neque earum consectetur, commodi reiciendis dolore quisquam animi possimus in mollitia deserunt numquam vitae eos, repellat illo, voluptas aliquam ad placeat ducimus quos officia inventore. Possimus nemo maxime alias minus ab distinctio odio, fugiat dolorem pariatur dolores!</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem