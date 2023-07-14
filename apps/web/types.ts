type AddedFrom = "match" | "team";
type NotificationSettingText =
  | "Mute Notifications"
  | "All Events"
  | "Goals"
  | "Red Cards"
  | "Missed Penalties"
  | "Started"
  | "Half Time"
  | "Ended";
export type NotificationSettingCode =
  | "mute_notifications"
  | "all_events"
  | "goals"
  | "red_cards"
  | "missed_penalties"
  | "started"
  | "half_time"
  | "full_time";

export interface UserMatchPreference {
  alerts: INotificationSettings[];
  addedFrom?: AddedFrom;
  match_id: string | number;
}

export interface UserTeamPreference {
  alerts: INotificationSettings[];
  team_id: string | number;
}

export interface INotificationSettings {
  text: NotificationSettingText;
  code: NotificationSettingCode;
  value: boolean;
}

export interface UserNotificationPreferences {
  user_id: string | null | undefined;
  notification_settings: INotificationSettings[];
  favorite_matches: UserMatchPreference[];
  favorite_teams?: UserTeamPreference[];
}
