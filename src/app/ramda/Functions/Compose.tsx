import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Compose extends React.PureComponent<Props, State> {
  render() {

    const db = {
      users: {
        JOE: {
          name: 'Joe',
          followers: ['STEVE', 'SUZY']
        }
      }
    };

    // We'll pretend to do a db lookup which returns a promise
    const lookupUser = (userId: string) => Promise.resolve(db.users[userId]);
    const lookupFollowers = (user: any) => Promise.resolve(user.followers);
    lookupUser('JOE').then(lookupFollowers);

    //  followersForUser :: String -> Promise [UserId]
    const followersForUserCompose = R.composeP(lookupFollowers, lookupUser);
    followersForUserCompose('JOE').then(followers => console.log('ComposeP Followers:', followers));
    // Followers: ["STEVE","SUZY"]
    //  followersForUser :: String -> Promise [User]

    const followersForUserPipe = R.pipeP(lookupUser, lookupFollowers);
    followersForUserPipe('JOE').then(followers => console.log('PipeP Followers:', followers));



    const classyGreeting = (firstName: string, lastName: string) => "The name's " + lastName + ', ' + firstName + ' ' + lastName;
    return (
      <div>
        <h3>R.compose</h3>
        <h5>Performs right-to-left function composition.</h5>

        <div>{`const classyGreeting = (firstName: string, lastName: string) => "The name's " + lastName + ', ' + firstName + ' ' + lastName;`}</div>
        <div>{`R.compose(R.toUpper, classyGreeting)('James', 'Bond') = ${R.compose(R.toUpper, classyGreeting)('James', 'Bond')}`}</div>
        <div>{`R.compose(Math.abs, R.add(1), R.multiply(2))(-4) = ${R.compose(Math.abs, R.add(1), R.multiply(2))(-4)}`}</div>

        <h3>R.pipe</h3>
        <h5>Performs left-to-right function composition.</h5>

        <div>{`const classyGreeting = (firstName: string, lastName: string) => "The name's " + lastName + ', ' + firstName + ' ' + lastName;`}</div>
        <div>{`R.pipe(classyGreeting, R.toUpper)('James', 'Bond') = ${R.pipe(classyGreeting, R.toUpper)('James', 'Bond')}`}</div>
        <div>{`R.pipe(Math.abs, R.add(1), R.multiply(2))(-4) = ${R.pipe(Math.abs, R.add(1), R.multiply(2))(-4)}`}</div>

        <h3>R.composeP</h3>
        <h3>R.pipeP</h3>
      </div>
    );
  }
}
