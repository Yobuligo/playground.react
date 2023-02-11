import { AppContext, AppContextDefault } from "./context/AppContext";
import { SP } from "./serviceProvider/ServiceProvider";
import { ServiceInstanceType } from "./serviceProvider/ServiceProviderTypes";
import { Factory, FactoryService } from "./services/IFactory";
import { Logger, LoggerService } from "./services/ILogger";

class Test {}

const logger = new Logger();
SP.put(LoggerService, logger);
SP.register(
  FactoryService,
  Factory,
  ServiceInstanceType.MULTI_INSTANTIABLE
);

const App: React.FC = () => {
  const logger = SP.fetch(LoggerService);
  logger.log("First fetch");
  SP.remove(FactoryService)
  let factory = SP.fetchOrNull(FactoryService);
  factory?.create(Test);
  factory = SP.fetchOrNull(FactoryService);
  factory?.create(Test);  
  return <AppContext.Provider value={AppContextDefault}></AppContext.Provider>;
};

export default App;
