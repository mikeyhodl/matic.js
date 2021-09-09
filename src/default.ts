import { setWeb3Client, Web3Client } from "./constant";
import { PlasmaClient } from "./plasma";
import { POSClient } from "./pos";
import { use } from "./utils";
import { BaseWeb3Client } from "./abstracts";

export const defaultExport = {
    set Web3Client(client: typeof BaseWeb3Client) {
        setWeb3Client(client);
    },
    get Web3Client() {
        return Web3Client as any;
    },
    use: use,
    PlasmaClient: PlasmaClient,
    POSClient: POSClient,
}