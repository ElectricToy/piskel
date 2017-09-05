// TODO(grosbouddha): put under pskl namespace.
var Events = {

  TOOL_SELECTED : 'TOOL_SELECTED',
  SELECT_TOOL : 'SELECT_TOOL',

  TOOL_RELEASED : 'TOOL_RELEASED',
  TOOL_PRESSED : 'TOOL_PRESSED',
  SELECT_PRIMARY_COLOR: 'SELECT_PRIMARY_COLOR',
  SELECT_SECONDARY_COLOR: 'SELECT_SECONDARY_COLOR',
  PRIMARY_COLOR_SELECTED : 'PRIMARY_COLOR_SELECTED',
  SECONDARY_COLOR_SELECTED : 'SECONDARY_COLOR_SELECTED',

  CURSOR_MOVED : 'CURSOR_MOVED',
  DRAG_START : 'DRAG_START',
  DRAG_END : 'DRAG_END',

  DIALOG_SHOW : 'DIALOG_SHOW',
  DIALOG_HIDE : 'DIALOG_HIDE',

  PALETTE_LIST_UPDATED : 'PALETTE_LIST_UPDATED',

  /**
   * Fired each time a user setting change.
   * The payload will be:
   *   1st argument: Name of the settings
   *   2nd argument: New value
   */
  USER_SETTINGS_CHANGED: 'USER_SETTINGS_CHANGED',
  SHORTCUTS_CHANGED: 'SHORTCUTS_CHANGED',

  CLOSE_SETTINGS_DRAWER : 'CLOSE_SETTINGS_DRAWER',

  /**
   * The framesheet was reseted and is now probably drastically different.
   * Number of frames, content of frames, color used for the palette may have changed.
   */
  PISKEL_RESET: 'PISKEL_RESET',
  PISKEL_SAVE_STATE: 'PISKEL_SAVE_STATE',
  PISKEL_DESCRIPTOR_UPDATED : 'PISKEL_DESCRIPTOR_UPDATED',
  PISKEL_SAVED_STATUS_UPDATE : 'PISKEL_SAVED_STATUS_UPDATE',

  HISTORY_STATE_SAVED: 'HISTORY_STATE_SAVED',
  HISTORY_STATE_LOADED: 'HISTORY_STATE_LOADED',

  PEN_SIZE_CHANGED : 'PEN_SIZE_CHANGED',

  /**
   * Fired when a Piskel is successfully saved
   */
  PISKEL_SAVED: 'PISKEL_SAVED',
  /**
   * Fired when a save action starts
   */
  BEFORE_SAVING_PISKEL: 'BEFORE_SAVING_PISKEL',
  /**
   * Fired when a save action ends. Always fires, even if saving was not successful
   */
  AFTER_SAVING_PISKEL: 'AFTER_SAVING_PISKEL',

  FRAME_SIZE_CHANGED : 'FRAME_SIZE_CHANGED',
  FPS_CHANGED : 'FPS_CHANGED',

  SELECTION_CREATED: 'SELECTION_CREATED',
  SELECTION_MOVE_REQUEST: 'SELECTION_MOVE_REQUEST',
  SELECTION_DISMISSED: 'SELECTION_DISMISSED',

  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',

  SHOW_PROGRESS: 'SHOW_PROGRESS',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  HIDE_PROGRESS: 'HIDE_PROGRESS',

  ZOOM_CHANGED : 'ZOOM_CHANGED',
  EXPORT_SCALE_CHANGED : 'EXPORT_SCALE_CHANGED',

  CURRENT_COLORS_UPDATED : 'CURRENT_COLORS_UPDATED',

  PERFORMANCE_REPORT_CHANGED : 'PERFORMANCE_REPORT_CHANGED',

  PISKEL_FILE_IMPORT_FAILED : 'PISKEL_FILE_IMPORT_FAILED',

  // Tests
  MOUSE_EVENT : 'MOUSE_EVENT',
  KEYBOARD_EVENT : 'KEYBOARD_EVENT',
  TRANSFORMATION_EVENT : 'TRANSFORMATION_EVENT',
  TEST_RECORD_END : 'TEST_RECORD_END',
  TEST_CASE_END : 'TEST_CASE_END',
  TEST_SUITE_END : 'TEST_SUITE_END'
};
