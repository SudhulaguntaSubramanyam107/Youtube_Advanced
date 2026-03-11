import React from 'react';

const commentsData = [
  {
    name:"Soham S Shinde",
    text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
    replies: [
      {
        name:"Rohit Sharma",
        text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
        replies: [],
      },
      {
        name:"Virat Kholi",
        text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
        replies: [
          {
            name:"Gautam Gmabhir",
            text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
            replies: [
              {
                name:"Soham S Shinde",
                text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                replies: []
              },
              {
                name:"Soham S Shinde",
                text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                replies: [
                  {
                    name:"Soham S Shinde",
                    text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                    replies: []
                  }
                ]
              }
            ]
          },
          {
            name:"Bumrah",
            text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
            replies: []
          },
          {
            name:"S SuryaKumar",
            text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
            replies: [
              {
                name:"Soham S Shinde",
                text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                replies: [
                  {
                    name:"Abhisehak Nayar",
                    text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                    replies: [
                      {
                        name:"Kuldeep Yadav",
                        text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
                        replies: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name:"Chahal Yuzi",
            text: "lorem ipsum ghteds awecds sssaewrcd sahdfsaf sehfsw f cds aer eufgew dsa,hj fuoa ",
            replies: []
          }
        ],
      }
    ]
  },
]

const Comment = ({data}) => {
  const {name , text , replies} = data;
  return <div className='flex bg-gray-300 items-center rounded-lg p-2 my-2 shadow-md'>
    <div className='p-3 flex  items-center'>
      <div className='mr-2'>
       <img className="h-8 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&s"
            alt="profile-icon" />
            </div>
            <div>
      <p className='text-xl font-bold'>{name}</p>
      <p className='text-lg'>{text}</p>
      </div>
    </div>
  </div>
}

const CommentList = ({comments}) => {
 return comments.map((comment , index) => (
  <div key={index}>
    <Comment data={comment}/>
    <div className='pl-5 border ml-5 border-l-black'>
      <CommentList comments={comment.replies}/>
    </div>
  </div>
 ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 ml-20 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;