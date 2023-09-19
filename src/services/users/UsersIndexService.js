class UsersIndexService{
    constructor(usersIndexRepository){
        this.usersIndexRepository = usersIndexRepository;
    }

    async execute({name}){
        const usersIndex = await this.usersIndexRepository.index(name);

        return usersIndex;
    }
}

module.exports = UsersIndexService;