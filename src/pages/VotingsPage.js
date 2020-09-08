import React, { Component, useEffect, useState } from 'react';
import './VotingsPage.css'
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import Vote from '../components/Vote';
import MyVotingModal from '../components/MyVotingModal';
import { Row,Breadcrumb,InputGroup,FormControl,Col } from 'react-bootstrap';
import Parse from 'parse'; 
import VotingModel from '../model/VotingModel';



function VotingsPage(props) {

    
  const { activeUser } = props;

  
  const [showNewVotingModal, setShowNewVotingModal] = React.useState(false)
  const [votes, setVotes] = React.useState([])

  function handleNewVoting(newVote) { 
    
    
    newVote.save().then(
        (result) => {
            // 2) Update state (votes array) with the new vote
            const vote = new VotingModel(result);
            setVotes(votes.concat(vote))
            console.log(votes)
        },
        (error) => {
            console.error('Error while creating Vote: ', error);
        }
    );

    // 3) Close the modal
    setShowNewVotingModal(false);
  }

    function handleModalClose() {
      setShowNewVotingModal(false)
              
    } 

    function handleModalOpen() {
        setShowNewVotingModal(true)     
      
    }

    function handleModalClose() {
      setShowNewVotingModal(false)
              
    } 

    useEffect(() => {
      if (activeUser) {
          const Vote = Parse.Object.extend('Vote');
          const query = new Parse.Query(Vote);
          //query.equalTo("userId", Parse.User.current());
          query.find().then(results => {
              // Success - results is the array of recipes
              const votes = results.map(result => new VotingModel(result));
              setVotes(votes);
          }, (error) => {
              console.error('Error while fetching Voting', error);
          });
      }
    }, [activeUser])

    if (!activeUser) {
        return <Redirect to="/" />
    }

      // Map my votes to UI
      const myVotingToShow = votes.map((vote,index) =>
      <Vote key={index} id={vote.id} title={vote.title} details={vote.details}
       opt1={vote.options[0]}  opt2={vote.options[1]} vote={vote} votes={votes}
     />) 


  
  return (
      <div className="p-votings">
        <CommitteeNavbar activeUser={activeUser}/>
        <div className="p-votes">
          <Row>

            <Col lg={6} sm={12} >
            
              <h1>Active Votings</h1>
            
              <div className="left-pane">
                <Breadcrumb.Item  onClick={handleModalOpen}>                     
                    New Voting
                </Breadcrumb.Item>        
                
                {myVotingToShow} 
                
                <Vote/>
              </div>  
            </Col>

            <Col lg={6} sm={12}>
              <h1>Votings Results</h1>
              <div  className="right-pane">
                <InputGroup className="mb-12">
                    <FormControl className="flter-bar mb-12" placeholder="filter by text title and details"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"/>              
                                            
                              
                </InputGroup>
                <Vote/>
              </div>
            </Col>  

          </Row>
        </div>    

        
        <MyVotingModal handleNewVoting={handleNewVoting} handleModalOpen={showNewVotingModal} handleModalClose={handleModalClose} />      
        

      </div>
  );
    
}

export default VotingsPage;