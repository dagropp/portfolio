class LocalDatabaseService {

  constructor() {

  }

  initDatabase() {
    const connection = indexedDB.open("portfolio_main")
    connection.onsuccess = function () {
      const {result} = this;
      // const store = result.createObjectStore("main_data", {keyPath: "mmain"});
      console.log(result)
    }
  }
}

export const localDatabaseService = new LocalDatabaseService();