import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
    private documentId: number;

    constructor(documentId: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.documentId = documentId;
    }

    getDocumentId(): number {
        return this.documentId;
    }

    setDocumentId(documentId: number): void {
        this.documentId = documentId;
    }
}