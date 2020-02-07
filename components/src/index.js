import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <div>
              <h4>Warning!</h4>
             Are you sure you want to do this?
            </div>
          </ApprovalCard>
          <ApprovalCard>
           <CommentDetail 
           avatar={faker.image.avatar()} 
           author="Sam" 
           timeAgo="Today at 4:45PM" 
           comment="Nice blog post!" />
          </ApprovalCard>
          <ApprovalCard>
           <CommentDetail 
           avatar={faker.image.avatar()} 
           author="Alex" 
           timeAgo="Today at 4:45PM" 
           comment="Nice blog post!" />
           </ApprovalCard>
          <ApprovalCard>
           <CommentDetail 
           avatar={faker.image.avatar()} 
           author="Jane" 
           timeAgo="Today at 4:45PM" 
           comment="Nice blog post!" />
          </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
