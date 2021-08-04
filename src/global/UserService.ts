import {storageService} from "./StorageService";

type TrackAction = "entrance" | "exit" | "browse";

class UserService {
  private readonly userId: string;
  private readonly sessionTimestamp: number;
  private readonly sessionReferrer: string;

  constructor() {
    const {
      user_id, session_timestamp, session_referrer
    } = storageService.registerEntrance();
    this.userId = user_id;
    this.sessionTimestamp = session_timestamp;
    this.sessionReferrer = session_referrer;
  }

  public trackUser(pathname: string, action: TrackAction): boolean {
    // return ServerService.beacon(
    //   "track_user", {
    //     ip_address: this.ip,
    //     session_id: this.sessionId,
    //     pathname,
    //     action
    //   });
    return true;
  }

  public getSecondsSinceLaunch(): number {
    return (Date.now() - this.sessionTimestamp) / 1000;
  }
}

export const userService = new UserService();