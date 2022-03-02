type VoteOption = {
  numberOfVotes: number;
  option: string;
};

class Vote {
  private _voteOptions: VoteOption[] = [];
  constructor(public details: string) {}

  addPollOption(voteOption: VoteOption): void {
    this._voteOptions.push(voteOption);
  }

  poll(voteIndex: number): void {
    if (!this._voteOptions[voteIndex]) return;
    this._voteOptions[voteIndex].numberOfVotes += 1;
  }

  get pollOptions(): VoteOption[] {
    return this._voteOptions;
  }
}

class PollApp {
  private _polls: Vote[] = [];

  addPoll(poll: Vote): void {
    this._polls.push(poll);
  }

  showPolls(): void {
    for (const poll of this._polls) {
      console.log(poll.details);
      for (const pollOption of poll.pollOptions) {
        console.log(pollOption.option, pollOption.numberOfVotes);
      }
      console.log('------------');
      console.log('');
    }
  }
}

const poll1 = new Vote('Qual a sua linguagem de programação favorita?')
poll1.addPollOption({option: 'Python', numberOfVotes: 0});
poll1.addPollOption({option: 'JavaScript', numberOfVotes: 0});
poll1.addPollOption({option: 'TypeScript', numberOfVotes: 0});
poll1.poll(2);
poll1.poll(2);
poll1.poll(2);
poll1.poll(2);
poll1.poll(0);
poll1.poll(1);

const poll2 = new Vote('Qual a sua cor favorita favorita?')
poll2.addPollOption({option: 'Verde', numberOfVotes: 0});
poll2.addPollOption({option: 'Preto', numberOfVotes: 0});
poll2.addPollOption({option: 'Azul', numberOfVotes: 0});
poll2.poll(0);
poll2.poll(1);
poll2.poll(1);
poll2.poll(0);
poll2.poll(1);
poll2.poll(1);

const pollApp = new PollApp();
pollApp.addPoll(poll1);
pollApp.addPoll(poll2);

pollApp.showPolls();