//const TARGET_HOST = "gae2-spclient.spotify.com";
//const TARGET_PATH = "/remote-config-resolver/v3/configuration";


// ===== 将两个数组粘贴到这里 =====
const OVERRIDE_ASSIGNED_VALUES = [
  {
      "propertyId": {
        "scope": "ios-learning-homeonboardingpage-impl",
        "name": "onboarding_page_enabled"
      },
      "metadata": {
        "policyId": "249059",
        "externalRealm": "exp-planner",
        "externalRealmId": "1197166"
      },
      "boolValue": {
        "value": true
      }
    },

    ////---------
    {
            "propertyId": {
              "scope": "ios-feature-settings-platform",
              "name": "is_playback_page_enabled"
            },
            "metadata": {
              "policyId": "519343",
              "externalRealm": "exp-planner",
              "externalRealmId": "10000765"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-canvas",
              "name": "canvas_enabled_ipad"
            },
            "metadata": {
              "policyId": "529814",
              "externalRealm": "exp-planner",
              "externalRealmId": "1285545"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-ontour",
              "name": "enable_nowplaying_scroll_events_card_on_ipad"
            },
            "metadata": {
              "policyId": "201591",
              "externalRealm": "exp-planner",
              "externalRealmId": "1182044"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-podcastpolls",
              "name": "is_enabled_for_npv_on_ipad"
            },
            "metadata": {
              "policyId": "201591",
              "externalRealm": "exp-planner",
              "externalRealmId": "1182044"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-watchfeed-npvprovider",
              "name": "watch_feed_in_npv_enabled_on_ipad"
            },
            "metadata": {
              "policyId": "350275",
              "externalRealm": "exp-planner",
              "externalRealmId": "1230437"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-home-evopage-impl",
              "name": "send_is_tablet_header"
            },
            "metadata": {
              "policyId": "529814",
              "externalRealm": "exp-planner",
              "externalRealmId": "1285545"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-browse-browsepage-impl",
              "name": "send_is_tablet_header"
            },
            "metadata": {
              "policyId": "529814",
              "externalRealm": "exp-planner",
              "externalRealmId": "1285545"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-home-evopage-impl",
              "name": "metadata_position_in_main_feed"
            },
            "metadata": {
              "policyId": "564217",
              "externalRealm": "exp-planner",
              "externalRealmId": "10041141"
            },
            "enumValue": {
              "value": "bottom"
            }
          },
    {
            "propertyId": {
              "scope": "ios-adaptivelayout-experimentationmanager",
              "name": "is_adaptive_layout_enabled"
            },
            "metadata": {
              "policyId": "529814",
              "externalRealm": "exp-planner",
              "externalRealmId": "1285545"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-adaptivelayout-experimentationmanager",
              "name": "now_playing_view_initial_mode"
            },
            "metadata": {
              "policyId": "529814",
              "externalRealm": "exp-planner",
              "externalRealmId": "1285545"
            },
            "enumValue": {
              "value": "Collapsed"
            }
          },
    {
            "propertyId": {
              "scope": "ios-home-evopage-impl",
              "name": "additional_section_spacing_on_main_feed"
            },
            "metadata": {
              "policyId": "564217",
              "externalRealm": "exp-planner",
              "externalRealmId": "10041141"
            },
            "intValue": {
              "value": 4
            }
          },
    {
            "propertyId": {
              "scope": "ios-home-evopage-impl",
              "name": "enable_edge_to_edge_video_mdc_in_main_feed"
            },
            "metadata": {
              "policyId": "569989",
              "externalRealm": "exp-planner",
              "externalRealmId": "1293737"
            },
            "boolValue": {
              "value": true
            }
          },

    ////---------
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_age_assurance_restrictions_mv_integration"
      },
      "metadata": {
        "policyId": "455677",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262150"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playbackcontrol-audiovideoswitcher-impl",
        "name": "enable_age_assurance"
      },
      "metadata": {
        "policyId": "455677",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262150"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "audio_video_switch_button_show_age_assurance_indicator"
      },
      "metadata": {
        "policyId": "455677",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262150"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "use_mdc_for_previews_on_music_subfeed"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "use_mdc_for_previews_on_podcasts_subfeed"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "enable_edge_to_edge_video_mdc_in_subfeeds"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-discovery-previewelement-impl",
        "name": "enable_artist_prominence"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "use_mdc_for_previews_on_audiobooks_subfeed"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "enable_standard_mdc_in_subfeeds"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "use_mdc_for_previews_on_video_subfeed"
      },
      "metadata": {
        "policyId": "470442",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259958"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-audio-journey",
        "name": "is_custom_exposure_enabled"
      },
      "metadata": {
        "policyId": "472113",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-audio-journey",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "472113",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-audio-journey",
        "name": "is_donation_enabled"
      },
      "metadata": {
        "policyId": "472113",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266321"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-progressstate-model-impl",
        "name": "episodes_resumption_api"
      },
      "metadata": {
        "policyId": "473366",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267385"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-progressstate-model-impl",
        "name": "audiobooks_resumption_api"
      },
      "metadata": {
        "policyId": "473366",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267385"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-progressstate-durationformatter-impl",
        "name": "unified_time_left_format"
      },
      "metadata": {
        "policyId": "473366",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267385"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-prefetch-feature",
        "name": "media_prefetcher_segmented_files_enabled"
      },
      "metadata": {
        "policyId": "476026",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268093"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-prefetch-feature",
        "name": "media_prefetcher_feature_watch_feed_window_size"
      },
      "metadata": {
        "policyId": "476026",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268093"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "core-automix",
        "name": "auto_transition_fallback_cuepoint_vocal_cut_threshold"
      },
      "metadata": {
        "policyId": "478596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268296"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "core-automix",
        "name": "auto_transition_fallback_cuepoint_selection_strategy"
      },
      "metadata": {
        "policyId": "478596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268296"
      },
      "enumValue": {
        "value": "First"
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "play_history_shuffle_scorer_history_track_count"
      },
      "metadata": {
        "policyId": "482057",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270440"
      },
      "intValue": {
        "value": 80
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "play_history_shuffle_scorer_context_history_track_count"
      },
      "metadata": {
        "policyId": "482057",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270440"
      },
      "intValue": {
        "value": 40
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "play_history_shuffle_scorer_context_track_count"
      },
      "metadata": {
        "policyId": "482057",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270440"
      },
      "intValue": {
        "value": 40
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "show_offline_devices_in_core"
      },
      "metadata": {
        "policyId": "9128",
        "externalRealm": "exp-planner",
        "externalRealmId": "33532"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-auth",
        "name": "source_application_denylist_enabled"
      },
      "metadata": {
        "policyId": "10622",
        "externalRealm": "exp-planner",
        "externalRealmId": "12651"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-googleassistantintegration",
        "name": "google_assistant_integration_enabled"
      },
      "metadata": {
        "policyId": "11522",
        "externalRealm": "exp-planner",
        "externalRealmId": "329345"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-spotifyappprotocol",
        "name": "inter_app_protocol_close_connections_on_end_of_stream_events"
      },
      "metadata": {
        "policyId": "13303",
        "externalRealm": "exp-planner",
        "externalRealmId": "1001170"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-metadata-feature",
        "name": "audio_files_prefetch_critical"
      },
      "metadata": {
        "policyId": "14249",
        "externalRealm": "exp-planner",
        "externalRealmId": "1005414"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-performancemetrics",
        "name": "should_instrument_with_service_system_perf_tracker"
      },
      "metadata": {
        "policyId": "16873",
        "externalRealm": "exp-planner",
        "externalRealmId": "1015783"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-performancesdkintegration",
        "name": "battery_instrumentation_enabled"
      },
      "metadata": {
        "policyId": "18011",
        "externalRealm": "exp-planner",
        "externalRealmId": "1022058"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-performancesdkintegration",
        "name": "battery_instrumentation_report_interval"
      },
      "metadata": {
        "policyId": "18011",
        "externalRealm": "exp-planner",
        "externalRealmId": "1022058"
      },
      "intValue": {
        "value": 1800
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "spotify_go_access_control_enabled"
      },
      "metadata": {
        "policyId": "18164",
        "externalRealm": "exp-planner",
        "externalRealmId": "35192"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share",
        "name": "is_useractivity_sharing_enabled"
      },
      "metadata": {
        "policyId": "18724",
        "externalRealm": "exp-planner",
        "externalRealmId": "1025828"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline2_write_resources_details_delay_milliseconds"
      },
      "metadata": {
        "policyId": "20840",
        "externalRealm": "exp-planner",
        "externalRealmId": "1036211"
      },
      "intValue": {
        "value": 60000
      }
    },
    {
      "propertyId": {
        "scope": "core-collection-feature",
        "name": "core_liked_songs_subjective_filters"
      },
      "metadata": {
        "policyId": "22632",
        "externalRealm": "exp-planner",
        "externalRealmId": "1043788"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibrarymusic",
        "name": "liked_songs_filter_chips_source"
      },
      "metadata": {
        "policyId": "22632",
        "externalRealm": "exp-planner",
        "externalRealmId": "1043788"
      },
      "enumValue": {
        "value": "subjective"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remoteconfiguration",
        "name": "remoteconfig_system_test"
      },
      "metadata": {
        "policyId": "23079",
        "externalRealm": "exp-planner",
        "externalRealmId": "1046189"
      },
      "enumValue": {
        "value": "Treatment"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remoteconfiguration",
        "name": "remoteconfig_unauth_system_test"
      },
      "metadata": {
        "policyId": "24080",
        "externalRealm": "exp-planner",
        "externalRealmId": "1050719"
      },
      "enumValue": {
        "value": "Treatment"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-unauth",
        "name": "remoteconfig_unauth_system_test"
      },
      "metadata": {
        "policyId": "25920",
        "externalRealm": "exp-planner",
        "externalRealmId": "1059415"
      },
      "enumValue": {
        "value": "Treatment"
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "default_primary_resource_type"
      },
      "metadata": {
        "policyId": "27104",
        "externalRealm": "exp-planner",
        "externalRealmId": "35761"
      },
      "enumValue": {
        "value": "Video"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alexaaccountlinking",
        "name": "alexa_account_linking_nudge_duration"
      },
      "metadata": {
        "policyId": "31783",
        "externalRealm": "exp-planner",
        "externalRealmId": "1001798"
      },
      "intValue": {
        "value": 30
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alexaaccountlinking",
        "name": "alexa_account_linking_nudge_cadence"
      },
      "metadata": {
        "policyId": "31783",
        "externalRealm": "exp-planner",
        "externalRealmId": "1001798"
      },
      "intValue": {
        "value": 7
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-partner",
        "name": "voice_assistants_enabled"
      },
      "metadata": {
        "policyId": "31783",
        "externalRealm": "exp-planner",
        "externalRealmId": "1001798"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-bitrate",
        "name": "net_fortune_coalesce_playback_id"
      },
      "metadata": {
        "policyId": "34013",
        "externalRealm": "exp-planner",
        "externalRealmId": "1093287"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-bitrate",
        "name": "net_fortune_use_playback_stats"
      },
      "metadata": {
        "policyId": "34013",
        "externalRealm": "exp-planner",
        "externalRealmId": "1093287"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_facebook_canvas_sharing_enabled"
      },
      "metadata": {
        "policyId": "35785",
        "externalRealm": "exp-planner",
        "externalRealmId": "1060827"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-screen-recording-detection",
        "name": "screen_recording_detection_instrumentation_enabled"
      },
      "metadata": {
        "policyId": "36021",
        "externalRealm": "exp-planner",
        "externalRealmId": "1100127"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "accessory_onboarding_enabled"
      },
      "metadata": {
        "policyId": "36712",
        "externalRealm": "exp-planner",
        "externalRealmId": "1095303"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "jabra_elite_interactive_onboarding_enabled"
      },
      "metadata": {
        "policyId": "36712",
        "externalRealm": "exp-planner",
        "externalRealmId": "1095303"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "spiderman_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "37723",
        "externalRealm": "exp-planner",
        "externalRealmId": "1110373"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "add_observers_on_scroll_only_when_view_appears"
      },
      "metadata": {
        "policyId": "40111",
        "externalRealm": "exp-planner",
        "externalRealmId": "1112346"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-crashreporter",
        "name": "metric_kit_diagnostics_report_cpu_exception_stack_traces"
      },
      "metadata": {
        "policyId": "40641",
        "externalRealm": "exp-planner",
        "externalRealmId": "1112738"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "video_support"
      },
      "metadata": {
        "policyId": "44329",
        "externalRealm": "exp-planner",
        "externalRealmId": "1115129"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "activation_strategy"
      },
      "metadata": {
        "policyId": "44329",
        "externalRealm": "exp-planner",
        "externalRealmId": "1115129"
      },
      "enumValue": {
        "value": "late_mobius"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "fullscreen_picture_in_picture"
      },
      "metadata": {
        "policyId": "50414",
        "externalRealm": "exp-planner",
        "externalRealmId": "1118864"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-audioadpictureinpicturecoordinator",
        "name": "pip_enabled"
      },
      "metadata": {
        "policyId": "50414",
        "externalRealm": "exp-planner",
        "externalRealmId": "1118864"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "picture_in_picture"
      },
      "metadata": {
        "policyId": "50414",
        "externalRealm": "exp-planner",
        "externalRealmId": "1118864"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings",
        "name": "pip_setting_section_enabled"
      },
      "metadata": {
        "policyId": "50414",
        "externalRealm": "exp-planner",
        "externalRealmId": "1118864"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "barbie_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "50679",
        "externalRealm": "exp-planner",
        "externalRealmId": "1119211"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-browse",
        "name": "section_pagination_enabled"
      },
      "metadata": {
        "policyId": "51390",
        "externalRealm": "exp-planner",
        "externalRealmId": "1115046"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-show-cosmos",
        "name": "show_request_optimization_level"
      },
      "metadata": {
        "policyId": "58705",
        "externalRealm": "exp-planner",
        "externalRealmId": "1123149"
      },
      "enumValue": {
        "value": "None"
      }
    },
    {
      "propertyId": {
        "scope": "core-remote-config",
        "name": "dummy_fruit_example"
      },
      "metadata": {
        "policyId": "59735",
        "externalRealm": "exp-planner",
        "externalRealmId": "1123617"
      },
      "enumValue": {
        "value": "Plum"
      }
    },
    {
      "propertyId": {
        "scope": "core-image",
        "name": "enable_online_size_image_resolve"
      },
      "metadata": {
        "policyId": "61757",
        "externalRealm": "exp-planner",
        "externalRealmId": "1120273"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-image",
        "name": "enable_online_image_resolve"
      },
      "metadata": {
        "policyId": "61757",
        "externalRealm": "exp-planner",
        "externalRealmId": "1120273"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-image-resolve",
        "name": "enable_projection_map_loading"
      },
      "metadata": {
        "policyId": "61757",
        "externalRealm": "exp-planner",
        "externalRealmId": "1120273"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "passthrough_episode_timeout_is_permanent"
      },
      "metadata": {
        "policyId": "104395",
        "externalRealm": "exp-planner",
        "externalRealmId": "1140477"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_podcast_video_preview_enabled"
      },
      "metadata": {
        "policyId": "112112",
        "externalRealm": "exp-planner",
        "externalRealmId": "1140542"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-creditsplus-creditspluscard",
        "name": "show_artist_images"
      },
      "metadata": {
        "policyId": "112436",
        "externalRealm": "exp-planner",
        "externalRealmId": "1146169"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_podcast_sponsored_content"
      },
      "metadata": {
        "policyId": "115694",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148107"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "image_gallery_enabled"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-episodecompanioncontent",
        "name": "episode_companion_content_enabled"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "pilot_shows_enabled"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "rich_content_image_enabled"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "looping_video_enabled"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_companion_content"
      },
      "metadata": {
        "policyId": "123234",
        "externalRealm": "exp-planner",
        "externalRealmId": "1152881"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lockscreen",
        "name": "companion_content_enabled"
      },
      "metadata": {
        "policyId": "130827",
        "externalRealm": "exp-planner",
        "externalRealmId": "1156432"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "artwork_unit_view_enabled"
      },
      "metadata": {
        "policyId": "130827",
        "externalRealm": "exp-planner",
        "externalRealmId": "1156432"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-companioncontent",
        "name": "information_unit_update_enabled"
      },
      "metadata": {
        "policyId": "130827",
        "externalRealm": "exp-planner",
        "externalRealmId": "1156432"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingbar",
        "name": "companion_content_in_npb_enabled"
      },
      "metadata": {
        "policyId": "130827",
        "externalRealm": "exp-planner",
        "externalRealmId": "1156432"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "npv_entity_enabled"
      },
      "metadata": {
        "policyId": "137736",
        "externalRealm": "exp-planner",
        "externalRealmId": "1158759"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "read_along_entity_enabled"
      },
      "metadata": {
        "policyId": "137736",
        "externalRealm": "exp-planner",
        "externalRealmId": "1158759"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-blendentity",
        "name": "add_tracks_enabled"
      },
      "metadata": {
        "policyId": "149314",
        "externalRealm": "exp-planner",
        "externalRealmId": "1163305"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_course_reporting"
      },
      "metadata": {
        "policyId": "156262",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165311"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_course_lesson_reporting"
      },
      "metadata": {
        "policyId": "156262",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165311"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "cover_art_mode_enabled"
      },
      "metadata": {
        "policyId": "161022",
        "externalRealm": "exp-planner",
        "externalRealmId": "1167557"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "include_playback_id_header"
      },
      "metadata": {
        "policyId": "162713",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168110"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-liveaudio-livestreampage",
        "name": "context_menu_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingliveroom",
        "name": "content_reporting_forms_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-liveroomplayer",
        "name": "ended_state_uses_iteration_count"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-liveaudio-livestreampage",
        "name": "stream_to_main_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "live_message_buffer_periodic_interval_millis"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "intValue": {
        "value": 100
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "live_message_buffer_initial_interval_millis"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "intValue": {
        "value": 100
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "coordinator_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "live_message_rewind_seconds"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "intValue": {
        "value": 180
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "livestream_ended_state_uses_iteration_count"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "demo_mode_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-system-listeningparties",
        "name": "live_message_max_delay_millis"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "intValue": {
        "value": 20000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingliveroom",
        "name": "live_room_npv_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-liveaudio-livestreampage",
        "name": "livestream_page_enabled"
      },
      "metadata": {
        "policyId": "163165",
        "externalRealm": "exp-planner",
        "externalRealmId": "1168253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player",
        "name": "handle_track_deferred_close_after_stream_resumption"
      },
      "metadata": {
        "policyId": "180587",
        "externalRealm": "exp-planner",
        "externalRealmId": "1174191"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "send_ad_opportunity_event"
      },
      "metadata": {
        "policyId": "180587",
        "externalRealm": "exp-planner",
        "externalRealmId": "1174191"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "cpp-player-rendering-renderer",
        "name": "dont_pause_stopping_track"
      },
      "metadata": {
        "policyId": "180587",
        "externalRealm": "exp-planner",
        "externalRealmId": "1174191"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "update_all_batch_interval_milliseconds"
      },
      "metadata": {
        "policyId": "183159",
        "externalRealm": "exp-planner",
        "externalRealmId": "1174582"
      },
      "intValue": {
        "value": 50
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "content_layer_refresh_enabled"
      },
      "metadata": {
        "policyId": "184852",
        "externalRealm": "exp-planner",
        "externalRealmId": "1176244"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastpolls",
        "name": "should_show_polls_feature_in_episode_page"
      },
      "metadata": {
        "policyId": "197160",
        "externalRealm": "exp-planner",
        "externalRealmId": "1179236"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastpolls",
        "name": "is_enabled_on_npv_for_video_episodes"
      },
      "metadata": {
        "policyId": "197160",
        "externalRealm": "exp-planner",
        "externalRealmId": "1179236"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_podcast_poll"
      },
      "metadata": {
        "policyId": "197160",
        "externalRealm": "exp-planner",
        "externalRealmId": "1179236"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "item_state_cache_size"
      },
      "metadata": {
        "policyId": "202081",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182200"
      },
      "intValue": {
        "value": 5000
      }
    },
    {
      "propertyId": {
        "scope": "ios-contextualattributesmanager-contextualsignals-impl",
        "name": "contextual_signals_provider_enabled"
      },
      "metadata": {
        "policyId": "217598",
        "externalRealm": "exp-planner",
        "externalRealmId": "1186130"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-contextualattributesmanager",
        "name": "home_reload_enabled"
      },
      "metadata": {
        "policyId": "217598",
        "externalRealm": "exp-planner",
        "externalRealmId": "1186130"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comments_card"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_reordering"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-notificationsv2",
        "name": "preferences_show_comments_category"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comments_card_episode_page"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_podcast_qna"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comment_card_cache"
      },
      "metadata": {
        "policyId": "221146",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188422"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-prerelease-feature",
        "name": "listening_party_card_enabled"
      },
      "metadata": {
        "policyId": "232401",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188856"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-track-info-provider-feature",
        "name": "batch_album_v4_lookups"
      },
      "metadata": {
        "policyId": "241365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1194536"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-decorators-feature",
        "name": "batch_artist_v4_lookups"
      },
      "metadata": {
        "policyId": "241365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1194536"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "header_course_discount_info_hidden"
      },
      "metadata": {
        "policyId": "249716",
        "externalRealm": "exp-planner",
        "externalRealmId": "1190336"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "pokemon_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "257373",
        "externalRealm": "exp-planner",
        "externalRealmId": "1199760"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-npvprovider",
        "name": "is_personalised_discovery_playlist_heuristic_enabled"
      },
      "metadata": {
        "policyId": "262223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1201490"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-prerelease-nowplayingviewprovider-impl",
        "name": "npv_is_pre_saved_release_heuristic_enabled"
      },
      "metadata": {
        "policyId": "262223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1201490"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "sanrio_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "280693",
        "externalRealm": "exp-planner",
        "externalRealmId": "1207270"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "wicked_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "284904",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208516"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "explicit_label"
      },
      "metadata": {
        "policyId": "288365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1176318"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "show_cover_art_on_videos"
      },
      "metadata": {
        "policyId": "288365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1176318"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "explicit_label"
      },
      "metadata": {
        "policyId": "288365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1176318"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-content-layer-platform",
        "name": "enhance_content_layer"
      },
      "metadata": {
        "policyId": "288365",
        "externalRealm": "exp-planner",
        "externalRealmId": "1176318"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-nowplaying-scroll-impl",
        "name": "enable_personalised_order_tiebreaker_logic"
      },
      "metadata": {
        "policyId": "293246",
        "externalRealm": "exp-planner",
        "externalRealmId": "1211184"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-collection-feature",
        "name": "core_collection_endpoint_logger_enabled"
      },
      "metadata": {
        "policyId": "305361",
        "externalRealm": "exp-planner",
        "externalRealmId": "1216413"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-encore-experiments",
        "name": "enable_adaptive_title_entities"
      },
      "metadata": {
        "policyId": "311646",
        "externalRealm": "exp-planner",
        "externalRealmId": "1202976"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "state_update_on_ad_config_loaded"
      },
      "metadata": {
        "policyId": "311958",
        "externalRealm": "exp-planner",
        "externalRealmId": "1218595"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "album_presave_second_step_enabled"
      },
      "metadata": {
        "policyId": "312581",
        "externalRealm": "exp-planner",
        "externalRealmId": "1218665"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumaccountmanagement",
        "name": "is_plan_overview_v2_enabled"
      },
      "metadata": {
        "policyId": "312641",
        "externalRealm": "exp-planner",
        "externalRealmId": "1218720"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-videocoordinator",
        "name": "stop_playback_on_stream_reporting_error"
      },
      "metadata": {
        "policyId": "316005",
        "externalRealm": "exp-planner",
        "externalRealmId": "1219550"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_episode_query_parameter_enabled"
      },
      "metadata": {
        "policyId": "318717",
        "externalRealm": "exp-planner",
        "externalRealmId": "1219035"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "horizontal_pivoting_onboarding_setting"
      },
      "metadata": {
        "policyId": "321178",
        "externalRealm": "exp-planner",
        "externalRealmId": "1221335"
      },
      "enumValue": {
        "value": "tooltip"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "card_cc_exclude_enabled"
      },
      "metadata": {
        "policyId": "324842",
        "externalRealm": "exp-planner",
        "externalRealmId": "1222252"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-device-predictability",
        "name": "enable_where_to_play"
      },
      "metadata": {
        "policyId": "326818",
        "externalRealm": "exp-planner",
        "externalRealmId": "1215215"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-prerelease-nowplayingviewprovider-impl",
        "name": "is_npv_scroll_element_migration_enabled"
      },
      "metadata": {
        "policyId": "327295",
        "externalRealm": "exp-planner",
        "externalRealmId": "1222135"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "complex_episode_description_number_of_lines"
      },
      "metadata": {
        "policyId": "327714",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223543"
      },
      "intValue": {
        "value": 3
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "complex_episode_description_prefix_metadata"
      },
      "metadata": {
        "policyId": "327714",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223543"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-modes",
        "name": "audio_switch_button_animated_for_music_videos"
      },
      "metadata": {
        "policyId": "334021",
        "externalRealm": "exp-planner",
        "externalRealmId": "1221687"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "music_adt_enabled"
      },
      "metadata": {
        "policyId": "343523",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227982"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "podcast_adt_enabled"
      },
      "metadata": {
        "policyId": "343523",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227982"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-liveevents-contextmenu",
        "name": "enable_report_concert_issue"
      },
      "metadata": {
        "policyId": "346340",
        "externalRealm": "exp-planner",
        "externalRealmId": "1225305"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumaccountmanagement",
        "name": "is_plan_details_v2_enabled"
      },
      "metadata": {
        "policyId": "347197",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228195"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "complex_audiobook_row_rating_enabled"
      },
      "metadata": {
        "policyId": "348632",
        "externalRealm": "exp-planner",
        "externalRealmId": "1226624"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "enable_album_new_releases_signifier"
      },
      "metadata": {
        "policyId": "350359",
        "externalRealm": "exp-planner",
        "externalRealmId": "1226390"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "queued_badge"
      },
      "metadata": {
        "policyId": "351206",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227584"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingbar",
        "name": "queue_badge"
      },
      "metadata": {
        "policyId": "351206",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227584"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-containerui",
        "name": "root_page_top_offset_adjustment"
      },
      "metadata": {
        "policyId": "351446",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230403"
      },
      "enumValue": {
        "value": "small"
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "ubi_impression_v2_logging_enabled"
      },
      "metadata": {
        "policyId": "354414",
        "externalRealm": "exp-planner",
        "externalRealmId": "1231655"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_sillywalk_rules"
      },
      "metadata": {
        "policyId": "360333",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233649"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "enable_highlight_component"
      },
      "metadata": {
        "policyId": "360527",
        "externalRealm": "exp-planner",
        "externalRealmId": "1231252"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-viewpageimpl",
        "name": "ubi_impression_v2_logging_enabled"
      },
      "metadata": {
        "policyId": "365653",
        "externalRealm": "exp-planner",
        "externalRealmId": "1232172"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-collection-feature",
        "name": "extended_episode_publish_date_indexing"
      },
      "metadata": {
        "policyId": "369538",
        "externalRealm": "exp-planner",
        "externalRealmId": "1236520"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-listuxplatform-freetierplaylistpage-impl",
        "name": "ubi_impression_v2_logging_enabled"
      },
      "metadata": {
        "policyId": "372583",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237645"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-personalizedsets-recsquality-impl",
        "name": "is_quicksilver_trigger_enabled"
      },
      "metadata": {
        "policyId": "375625",
        "externalRealm": "exp-planner",
        "externalRealmId": "1238501"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "complex_playlist_row_descriptors_in_secondary_subtitle"
      },
      "metadata": {
        "policyId": "376775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237935"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_author_reporting"
      },
      "metadata": {
        "policyId": "377461",
        "externalRealm": "exp-planner",
        "externalRealmId": "1236822"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_mic_permission_declined_narration"
      },
      "metadata": {
        "policyId": "381771",
        "externalRealm": "exp-planner",
        "externalRealmId": "1240382"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_mic_permission_dialog_pause"
      },
      "metadata": {
        "policyId": "381771",
        "externalRealm": "exp-planner",
        "externalRealmId": "1240382"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_fullscreen_microphone_request"
      },
      "metadata": {
        "policyId": "381771",
        "externalRealm": "exp-planner",
        "externalRealmId": "1240382"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_ig_audio_preview_entity_uri_enabled"
      },
      "metadata": {
        "policyId": "383584",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241245"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "save_actions_first_step_enabled"
      },
      "metadata": {
        "policyId": "384838",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241608"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "album_presave_first_step_enabled"
      },
      "metadata": {
        "policyId": "384838",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241608"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_voice_improvements"
      },
      "metadata": {
        "policyId": "385613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241087"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-djsettings-impl",
        "name": "enable_setting_dj_improvements"
      },
      "metadata": {
        "policyId": "385613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241087"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comment_threads_proto"
      },
      "metadata": {
        "policyId": "386974",
        "externalRealm": "exp-planner",
        "externalRealmId": "1235293"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comment_threads"
      },
      "metadata": {
        "policyId": "386974",
        "externalRealm": "exp-planner",
        "externalRealmId": "1235293"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "seeking_thumbnail_enabled"
      },
      "metadata": {
        "policyId": "391474",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241634"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "scrubbing_thumbnail_enabled"
      },
      "metadata": {
        "policyId": "391474",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241634"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "fullscreen_scrubbing_thumbnail_enabled"
      },
      "metadata": {
        "policyId": "391474",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241634"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "sony_headphones_onboarding_enabled"
      },
      "metadata": {
        "policyId": "392340",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230664"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-accessory-onboarding",
        "name": "enable_simple_cache"
      },
      "metadata": {
        "policyId": "392340",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230664"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-interceptor-impl",
        "name": "play_command_interceptor_enabled"
      },
      "metadata": {
        "policyId": "395542",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244680"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistuxplatformconsumers-musicvideoplaylistplugin",
        "name": "enable_interceptor_on_video_rows"
      },
      "metadata": {
        "policyId": "395542",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244680"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-musicvideoplaylistimpl",
        "name": "enable_interceptor_on_video_rows"
      },
      "metadata": {
        "policyId": "395542",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244680"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "video_interceptor_enabled"
      },
      "metadata": {
        "policyId": "395542",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244680"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lockscreen",
        "name": "show_video_indicator_mv"
      },
      "metadata": {
        "policyId": "400075",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246323"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-cast",
        "name": "clear_cast_devices_when_offline"
      },
      "metadata": {
        "policyId": "406790",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245679"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-messagebox",
        "name": "message_box_permissions_min_days_after_dismissed"
      },
      "metadata": {
        "policyId": "407137",
        "externalRealm": "exp-planner",
        "externalRealmId": "1248323"
      },
      "intValue": {
        "value": 14
      }
    },
    {
      "propertyId": {
        "scope": "ios-upcoming-releaseshubpage-impl",
        "name": "is_page_enabled"
      },
      "metadata": {
        "policyId": "407305",
        "externalRealm": "exp-planner",
        "externalRealmId": "1248396"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "crossword_section_enabled"
      },
      "metadata": {
        "policyId": "407517",
        "externalRealm": "exp-planner",
        "externalRealmId": "1248351"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "more_results_header_after_crossword_flatlist_enabled"
      },
      "metadata": {
        "policyId": "407517",
        "externalRealm": "exp-planner",
        "externalRealmId": "1248351"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-browse-browsepage-impl",
        "name": "ubi_impression_v2_logging_enabled"
      },
      "metadata": {
        "policyId": "416686",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250959"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-subscriptionmanagement-removememberpage-impl",
        "name": "remove_member_page_enabled"
      },
      "metadata": {
        "policyId": "419264",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250671"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-memberdetailspage-impl",
        "name": "remove_member_page_entry_point_enabled"
      },
      "metadata": {
        "policyId": "419264",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250671"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-memberdetailspage-impl",
        "name": "allocations_enabled"
      },
      "metadata": {
        "policyId": "419264",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250671"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-subscriptionmanagement-allocationrequestdialogpage-impl",
        "name": "allocation_request_dialog_inline_error_enabled"
      },
      "metadata": {
        "policyId": "419273",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250663"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-subscriptionmanagement-allocationrequestdialogpage-impl",
        "name": "allocation_request_dialog_enabled"
      },
      "metadata": {
        "policyId": "419273",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250663"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "video_first_mode_configuration"
      },
      "metadata": {
        "policyId": "420730",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250249"
      },
      "enumValue": {
        "value": "space_saver"
      }
    },
    {
      "propertyId": {
        "scope": "ios-nowplaying-contentlayers-impl",
        "name": "video_first_content_type"
      },
      "metadata": {
        "policyId": "420730",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250249"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-npvprovider-impl",
        "name": "disable_video_preview"
      },
      "metadata": {
        "policyId": "420730",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250249"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "sentence_trimming_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "duration_element_ad_detection_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-chapterslist",
        "name": "ad_detection_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "creator_timestamp_play_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "stand_alone_page_ad_detection_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "npv_passthrough_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "low_precision_check_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-share-podcast-timestamp-provider",
        "name": "is_passthrough_creator_timestamp_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "share_link_start_position_resolving_timeout"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "intValue": {
        "value": 3000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-episodechapters",
        "name": "ad_detection_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "content_layer_migration_enabled"
      },
      "metadata": {
        "policyId": "426176",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252761"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-podcastfollowfeedpage-impl",
        "name": "kodiak_enabled"
      },
      "metadata": {
        "policyId": "426773",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253119"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "wednesday_easter_egg"
      },
      "metadata": {
        "policyId": "429466",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254251"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "instant_mix_section_enabled"
      },
      "metadata": {
        "policyId": "430710",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255625"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "simplified_instant_mix_row_enabled"
      },
      "metadata": {
        "policyId": "430710",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255625"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "optimized_instant_mix_section_enabled"
      },
      "metadata": {
        "policyId": "430710",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255625"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "concerts_enabled"
      },
      "metadata": {
        "policyId": "433113",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255774"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-elements-impl",
        "name": "two_lines_for_title_for_podcasts_enabled"
      },
      "metadata": {
        "policyId": "434169",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252512"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-npvprovider-impl",
        "name": "episode_video_recs_enabled"
      },
      "metadata": {
        "policyId": "434169",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252512"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-elements-impl",
        "name": "duration_label_enabled"
      },
      "metadata": {
        "policyId": "434169",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252512"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-elements-impl",
        "name": "save_button_enabled"
      },
      "metadata": {
        "policyId": "434169",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252512"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-elements-impl",
        "name": "inline_release_date_enabled"
      },
      "metadata": {
        "policyId": "434169",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252512"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-messaging-reduceinterventions-impl",
        "name": "enabled"
      },
      "metadata": {
        "policyId": "436788",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257288"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-messaging-reduceinterventions-impl",
        "name": "enable_message_reinvent_free_n_p_v_suggestions_upsell"
      },
      "metadata": {
        "policyId": "436788",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257288"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-messaging-reduceinterventions-impl",
        "name": "max_account_age_days"
      },
      "metadata": {
        "policyId": "436788",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257288"
      },
      "intValue": {
        "value": 65536
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-createmenu",
        "name": "should_animate_with_constraints"
      },
      "metadata": {
        "policyId": "440223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "onboarding_label_share_sheet_enabled"
      },
      "metadata": {
        "policyId": "441785",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250456"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "onboarding_label_side_drawer_enabled"
      },
      "metadata": {
        "policyId": "441785",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250456"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "enable_ad_request_metrics"
      },
      "metadata": {
        "policyId": "442441",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259113"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "ad_request_metrics_sample_every_n"
      },
      "metadata": {
        "policyId": "442441",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259113"
      },
      "intValue": {
        "value": 1
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premium-destination-badge",
        "name": "badge_enabled"
      },
      "metadata": {
        "policyId": "445157",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259760"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectivity",
        "name": "perimeter_host_authoriser_enabled"
      },
      "metadata": {
        "policyId": "445419",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259778"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "is_get_lyrics_v2_enabled"
      },
      "metadata": {
        "policyId": "448101",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260264"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "cpp-player-rendering-renderer",
        "name": "context_player_controls_playback_speed"
      },
      "metadata": {
        "policyId": "449320",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254348"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-playbackcontrol-podcastplaybackspeedplatform-impl",
        "name": "use_playback_settings_system"
      },
      "metadata": {
        "policyId": "449320",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254348"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_shared_global_playback_settings"
      },
      "metadata": {
        "policyId": "449320",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254348"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "save_actions_recents_enabled"
      },
      "metadata": {
        "policyId": "451434",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261664"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "mark_last_ad_break_time_for_preroll"
      },
      "metadata": {
        "policyId": "454964",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261510"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "always_keep_preroll_slot_filled"
      },
      "metadata": {
        "policyId": "454964",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261510"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-your-plan-sidedrawer",
        "name": "is_row_enabled"
      },
      "metadata": {
        "policyId": "455090",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255504"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_shuffle_order_event"
      },
      "metadata": {
        "policyId": "456873",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263032"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "shuffle_sequence_event_tracks_limit"
      },
      "metadata": {
        "policyId": "456873",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263032"
      },
      "intValue": {
        "value": 50
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_shuffle_context_event"
      },
      "metadata": {
        "policyId": "456873",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263032"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-carplayv2",
        "name": "batched_artwork_loading_enabled"
      },
      "metadata": {
        "policyId": "460076",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264012"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "is_lyrics_card_element_enabled"
      },
      "metadata": {
        "policyId": "460891",
        "externalRealm": "exp-planner",
        "externalRealmId": "1231502"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "lyrics_match_pretitle_first_step_enabled"
      },
      "metadata": {
        "policyId": "461895",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259942"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "lyrics_match_snippet_second_step_enabled"
      },
      "metadata": {
        "policyId": "461895",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259942"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-externalintegration",
        "name": "enable_content_playability_filtering"
      },
      "metadata": {
        "policyId": "462002",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264616"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-segment-context-loader-feature",
        "name": "segment_context_loader"
      },
      "metadata": {
        "policyId": "462645",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261934"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-search-recentslist-impl",
        "name": "gray_out_unplayable_tracks_enabled"
      },
      "metadata": {
        "policyId": "463433",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264629"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-livesharing-google-meet",
        "name": "enable_integration"
      },
      "metadata": {
        "policyId": "464774",
        "externalRealm": "exp-planner",
        "externalRealmId": "1258221"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallisteningpartnerintegrations-controller-impl",
        "name": "pause_playback_delay_millis"
      },
      "metadata": {
        "policyId": "464774",
        "externalRealm": "exp-planner",
        "externalRealmId": "1258221"
      },
      "intValue": {
        "value": 1000
      }
    },
    {
      "propertyId": {
        "scope": "ios-planoverviewpage-impl",
        "name": "unboxing_entry_point"
      },
      "metadata": {
        "policyId": "464819",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265417"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-unboxing-hub",
        "name": "premium_entry_modal"
      },
      "metadata": {
        "policyId": "464819",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265417"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-unboxing-hub",
        "name": "premium_entry_banner"
      },
      "metadata": {
        "policyId": "464819",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265417"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-unboxingentrypointavailability",
        "name": "your_premium_benefits_entry_point"
      },
      "metadata": {
        "policyId": "464819",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265417"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-jam",
        "name": "enable_reduce_connect_updates"
      },
      "metadata": {
        "policyId": "465747",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265637"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-ignoreinrecs-ignoreinrecs-impl",
        "name": "show_track_exclude_menu_item"
      },
      "metadata": {
        "policyId": "465802",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265469"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-episodechapters",
        "name": "now_playing_chapters_card_element_migration_enabled"
      },
      "metadata": {
        "policyId": "466078",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265683"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-partneraiassistant-metawearables",
        "name": "use_new_playback_controller"
      },
      "metadata": {
        "policyId": "469190",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257606"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "element_api_second_step_enabled"
      },
      "metadata": {
        "policyId": "469987",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266976"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "element_api_first_step_enabled"
      },
      "metadata": {
        "policyId": "470011",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266972"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "venues_enabled"
      },
      "metadata": {
        "policyId": "470397",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266687"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-learnmoresheet",
        "name": "enable_invites_learn_more_sheet"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-messaginguiimpl",
        "name": "enable_host_approval_flow"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-pendingrequestssheet",
        "name": "enable_pending_request_sheet"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-attachments-impl",
        "name": "is_waiting_host_approval_hat_enabled"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-canceljoinrequestsheet",
        "name": "enable_cancel_join_jam_request_sheet"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "enable_phone_speaker_host_approval"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-hostapprovalimpl",
        "name": "enable_host_approval_loop"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-jamdevicepickerintegration",
        "name": "enable_host_approval_flow"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "enable_host_approval_flow"
      },
      "metadata": {
        "policyId": "472242",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267440"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-curation-state-feature",
        "name": "core_include_your_episodes"
      },
      "metadata": {
        "policyId": "473030",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267397"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-your-library-feature",
        "name": "core_predefined_playlist_for_ye"
      },
      "metadata": {
        "policyId": "473030",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267397"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-podcastuiplatform-podcastimpl",
        "name": "load_episodes_using_list_platform_enabled"
      },
      "metadata": {
        "policyId": "473239",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267842"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "enable_page_api_for_new_picker"
      },
      "metadata": {
        "policyId": "473445",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268063"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "playlist_sync_events_logging_level"
      },
      "metadata": {
        "policyId": "473946",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268265"
      },
      "enumValue": {
        "value": "Error"
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "is_interactivity_allowed_for_es_mx"
      },
      "metadata": {
        "policyId": "474223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267345"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-djmusic-impl",
        "name": "interactivity_container_entrypoint"
      },
      "metadata": {
        "policyId": "474223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267345"
      },
      "enumValue": {
        "value": "tap"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourupdates",
        "name": "feature_enabled"
      },
      "metadata": {
        "policyId": "474382",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268402"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-search-feature",
        "name": "include_cached_tracks"
      },
      "metadata": {
        "policyId": "475175",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266534"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "updated_offline_header_titles_enabled"
      },
      "metadata": {
        "policyId": "475175",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266534"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "remove_secondary_audio_should_be_silenced_hint"
      },
      "metadata": {
        "policyId": "476086",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-live",
        "name": "enable_concert_feed_view"
      },
      "metadata": {
        "policyId": "476455",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267924"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-live",
        "name": "enable_live_events_page"
      },
      "metadata": {
        "policyId": "476455",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267924"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-blendentity",
        "name": "referrals_entrypoint_section_enabled"
      },
      "metadata": {
        "policyId": "478979",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269842"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_track_uri_to_facebook_stories_enabled"
      },
      "metadata": {
        "policyId": "479060",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268937"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "bitrate_downgrade_non_lossless"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "bitrate_downgrade"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "enumValue": {
        "value": "AudioBufferSize"
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "darkload_dowgrading"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "min_buffer_for_buffer_monitoring_to_start"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "intValue": {
        "value": 2000
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "bitrate_downgrade_target_bitrate"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "intValue": {
        "value": 320000
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "send_midtrack_downgrade_event"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "critical_buffer_threshold_for_bitrate_downgrade"
      },
      "metadata": {
        "policyId": "479596",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270022"
      },
      "intValue": {
        "value": 1500
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "playback_options_button"
      },
      "metadata": {
        "policyId": "481135",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270613"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "pip_video_playback_option"
      },
      "metadata": {
        "policyId": "481135",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270613"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-watchplatform",
        "name": "apple_watch_offline"
      },
      "metadata": {
        "policyId": "30748",
        "externalRealm": "exp-planner",
        "externalRealmId": "1080441"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_audiobook_book_reporting"
      },
      "metadata": {
        "policyId": "32011",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165623"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_audiobook_chapter_reporting"
      },
      "metadata": {
        "policyId": "32011",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165623"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-performancesdkintegration",
        "name": "should_send_time_measurements"
      },
      "metadata": {
        "policyId": "32014",
        "externalRealm": "exp-planner",
        "externalRealmId": "1212902"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-show-context-loader-feature",
        "name": "show_context_loader"
      },
      "metadata": {
        "policyId": "32046",
        "externalRealm": "exp-planner",
        "externalRealmId": "1086069"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share",
        "name": "is_instagram_direct_message_sharing_enabled"
      },
      "metadata": {
        "policyId": "32092",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175571"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-stream-reporting-feature",
        "name": "send_uct_streamed_decision"
      },
      "metadata": {
        "policyId": "32124",
        "externalRealm": "exp-planner",
        "externalRealmId": "1086253"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-login",
        "name": "delayed_sia_verification_enabled"
      },
      "metadata": {
        "policyId": "32136",
        "externalRealm": "exp-planner",
        "externalRealmId": "1086256"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share",
        "name": "is_facebook_messenger_sharing_enabled"
      },
      "metadata": {
        "policyId": "32160",
        "externalRealm": "exp-planner",
        "externalRealmId": "1086296"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-image",
        "name": "enable_image_resolve"
      },
      "metadata": {
        "policyId": "32222",
        "externalRealm": "exp-planner",
        "externalRealmId": "1115941"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remoteconfiguration",
        "name": "button_color_dummy_property"
      },
      "metadata": {
        "policyId": "32290",
        "externalRealm": "exp-planner",
        "externalRealmId": "1086624"
      },
      "enumValue": {
        "value": "Blue"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-encoreintegration",
        "name": "lottie_automatic_renderingengine_enabled"
      },
      "metadata": {
        "policyId": "32411",
        "externalRealm": "exp-planner",
        "externalRealmId": "1090353"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "black_panther_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "32416",
        "externalRealm": "exp-planner",
        "externalRealmId": "1087066"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_session_invitation_enabled"
      },
      "metadata": {
        "policyId": "32811",
        "externalRealm": "exp-planner",
        "externalRealmId": "1088543"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "allow_fades_longer_than_duration"
      },
      "metadata": {
        "policyId": "33287",
        "externalRealm": "exp-planner",
        "externalRealmId": "1090339"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "metadata_5xx_backoff_seconds"
      },
      "metadata": {
        "policyId": "33555",
        "externalRealm": "exp-planner",
        "externalRealmId": "1097050"
      },
      "intValue": {
        "value": 900
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-carplayv2",
        "name": "accessory_definition_from_system_enabled"
      },
      "metadata": {
        "policyId": "33922",
        "externalRealm": "exp-planner",
        "externalRealmId": "1092898"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumdestination",
        "name": "premium_destination_swift_content_operations_enabled"
      },
      "metadata": {
        "policyId": "33956",
        "externalRealm": "exp-planner",
        "externalRealmId": "1105471"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "should_migrate_database"
      },
      "metadata": {
        "policyId": "34330",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263859"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectnotifications",
        "name": "show_your_dj_nudge"
      },
      "metadata": {
        "policyId": "35518",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136326"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "enable_state_fetch_system"
      },
      "metadata": {
        "policyId": "35903",
        "externalRealm": "exp-planner",
        "externalRealmId": "1101252"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-assistedcurationmigration",
        "name": "suggested_episodes_card_enabled"
      },
      "metadata": {
        "policyId": "37470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1109353"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-assistedcuration",
        "name": "episode_search_preview_enabled"
      },
      "metadata": {
        "policyId": "37470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1109353"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-assistedcuration",
        "name": "episode_preview_enabled"
      },
      "metadata": {
        "policyId": "37470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1109353"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-media-parsers-feature",
        "name": "use_platform_media_parser_for_image_loading"
      },
      "metadata": {
        "policyId": "37526",
        "externalRealm": "exp-planner",
        "externalRealmId": "1109553"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-canvas",
        "name": "canvas_enabled"
      },
      "metadata": {
        "policyId": "37855",
        "externalRealm": "exp-planner",
        "externalRealmId": "1110746"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "live_room_mode_enabled"
      },
      "metadata": {
        "policyId": "38418",
        "externalRealm": "exp-planner",
        "externalRealmId": "1111070"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingliveroom",
        "name": "upsell_card_enabled"
      },
      "metadata": {
        "policyId": "38428",
        "externalRealm": "exp-planner",
        "externalRealmId": "1111086"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-performancesdkintegration",
        "name": "should_instrument_page_performance"
      },
      "metadata": {
        "policyId": "39367",
        "externalRealm": "exp-planner",
        "externalRealmId": "1111836"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-localfiles",
        "name": "documents_enabled"
      },
      "metadata": {
        "policyId": "40868",
        "externalRealm": "exp-planner",
        "externalRealmId": "1112863"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-metadata-feature",
        "name": "track_auto_refresh_enabled"
      },
      "metadata": {
        "policyId": "40930",
        "externalRealm": "exp-planner",
        "externalRealmId": "1112887"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-metadata-feature",
        "name": "episode_auto_refresh_enabled"
      },
      "metadata": {
        "policyId": "40930",
        "externalRealm": "exp-planner",
        "externalRealmId": "1112887"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "auto_open_npv_for_video_podcasts"
      },
      "metadata": {
        "policyId": "41521",
        "externalRealm": "exp-planner",
        "externalRealmId": "1113304"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "request_compress_using"
      },
      "metadata": {
        "policyId": "42672",
        "externalRealm": "exp-planner",
        "externalRealmId": "1164048"
      },
      "enumValue": {
        "value": "gzip"
      }
    },
    {
      "propertyId": {
        "scope": "core-image",
        "name": "enable_image_io_thread"
      },
      "metadata": {
        "policyId": "45439",
        "externalRealm": "exp-planner",
        "externalRealmId": "1115937"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "audio_index_should_send_report"
      },
      "metadata": {
        "policyId": "47578",
        "externalRealm": "exp-planner",
        "externalRealmId": "1181294"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "audio_index_job_period_seconds"
      },
      "metadata": {
        "policyId": "47578",
        "externalRealm": "exp-planner",
        "externalRealmId": "1181294"
      },
      "intValue": {
        "value": 86413
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "audio_index_max_batch"
      },
      "metadata": {
        "policyId": "47578",
        "externalRealm": "exp-planner",
        "externalRealmId": "1181294"
      },
      "intValue": {
        "value": 512
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "audio_index_job_delay_seconds"
      },
      "metadata": {
        "policyId": "47578",
        "externalRealm": "exp-planner",
        "externalRealmId": "1181294"
      },
      "intValue": {
        "value": 31
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "audio_index_batch_period_seconds"
      },
      "metadata": {
        "policyId": "47578",
        "externalRealm": "exp-planner",
        "externalRealmId": "1181294"
      },
      "intValue": {
        "value": 31
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "payload_size"
      },
      "metadata": {
        "policyId": "48858",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269874"
      },
      "intValue": {
        "value": 128000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_share_link_preview_uploads"
      },
      "metadata": {
        "policyId": "55040",
        "externalRealm": "exp-planner",
        "externalRealmId": "1121442"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alexaaccountlinking",
        "name": "account_linking_from_alexa_app"
      },
      "metadata": {
        "policyId": "59741",
        "externalRealm": "exp-planner",
        "externalRealmId": "1123847"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "video_data_saver_enabled"
      },
      "metadata": {
        "policyId": "59826",
        "externalRealm": "exp-planner",
        "externalRealmId": "1123869"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-datasaver",
        "name": "enable_data_concerns_settings"
      },
      "metadata": {
        "policyId": "59826",
        "externalRealm": "exp-planner",
        "externalRealmId": "1123869"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_audiobook_gating_support"
      },
      "metadata": {
        "policyId": "60281",
        "externalRealm": "exp-planner",
        "externalRealmId": "1124159"
      },
      "enumValue": {
        "value": "Enabled"
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "update_all_interval_milliseconds"
      },
      "metadata": {
        "policyId": "61348",
        "externalRealm": "exp-planner",
        "externalRealmId": "1124689"
      },
      "intValue": {
        "value": 200
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "metadata_wait_for_track_info_complete"
      },
      "metadata": {
        "policyId": "63956",
        "externalRealm": "exp-planner",
        "externalRealmId": "1126095"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "custom_abp_expiry_enabled"
      },
      "metadata": {
        "policyId": "65682",
        "externalRealm": "exp-planner",
        "externalRealmId": "1126953"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "smart_shuffle_show_sheet_count"
      },
      "metadata": {
        "policyId": "67684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143697"
      },
      "intValue": {
        "value": 2
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "enable_smart_shuffle_lens_delay_factor"
      },
      "metadata": {
        "policyId": "67684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143697"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "signal_timeout"
      },
      "metadata": {
        "policyId": "67684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143697"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "playlist_context_updater_enabled"
      },
      "metadata": {
        "policyId": "67684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143697"
      },
      "enumValue": {
        "value": "WhenVolatileContextIsNotActive"
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "enable_smart_shuffle_lens_timeout"
      },
      "metadata": {
        "policyId": "67684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143697"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_track_canvas_reporting"
      },
      "metadata": {
        "policyId": "70795",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165616"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_artist_profile_reporting"
      },
      "metadata": {
        "policyId": "70819",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165615"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcast-interactivity-components",
        "name": "enable_podcast_poll_reporting"
      },
      "metadata": {
        "policyId": "70839",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165614"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-storage",
        "name": "expiry_unlock_grace_music"
      },
      "metadata": {
        "policyId": "71158",
        "externalRealm": "exp-planner",
        "externalRealmId": "1129987"
      },
      "intValue": {
        "value": 129600
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "use_quickstart_pivot_for_tap"
      },
      "metadata": {
        "policyId": "72551",
        "externalRealm": "exp-planner",
        "externalRealmId": "1171010"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "recommendation_instead_of_resume"
      },
      "metadata": {
        "policyId": "72565",
        "externalRealm": "exp-planner",
        "externalRealmId": "1130686"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-hearables",
        "name": "spotify_tap_backend_service_enabled"
      },
      "metadata": {
        "policyId": "72567",
        "externalRealm": "exp-planner",
        "externalRealmId": "1130688"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "fetch_full_internal_audio_show_episode"
      },
      "metadata": {
        "policyId": "73834",
        "externalRealm": "exp-planner",
        "externalRealmId": "1131433"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "fetch_cold_start_preroll_ad"
      },
      "metadata": {
        "policyId": "74820",
        "externalRealm": "exp-planner",
        "externalRealmId": "1162495"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads-feature",
        "name": "enable_podcast_inter_episode_cold_start_preroll"
      },
      "metadata": {
        "policyId": "74820",
        "externalRealm": "exp-planner",
        "externalRealmId": "1162495"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads-feature",
        "name": "metadata_blocking_duration"
      },
      "metadata": {
        "policyId": "74820",
        "externalRealm": "exp-planner",
        "externalRealmId": "1162495"
      },
      "intValue": {
        "value": 700
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads-feature",
        "name": "podcast_preroll_ad_playback_blocking_duration"
      },
      "metadata": {
        "policyId": "74820",
        "externalRealm": "exp-planner",
        "externalRealmId": "1162495"
      },
      "intValue": {
        "value": 750
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sleeptimer",
        "name": "enable_fade_out"
      },
      "metadata": {
        "policyId": "80953",
        "externalRealm": "exp-planner",
        "externalRealmId": "1134278"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_session_invitation_dismiss_sheet_interval"
      },
      "metadata": {
        "policyId": "85653",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136361"
      },
      "intValue": {
        "value": 300
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-attachments-impl",
        "name": "enable_group_session_attachment"
      },
      "metadata": {
        "policyId": "85653",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-socialrecommendationsassistedcurationplugins",
        "name": "social_recommendations_card_enabled"
      },
      "metadata": {
        "policyId": "85653",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectui",
        "name": "hide_social_listening_info_from_connect_npb"
      },
      "metadata": {
        "policyId": "85653",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline2_max_backoff_delay_milliseconds"
      },
      "metadata": {
        "policyId": "87559",
        "externalRealm": "exp-planner",
        "externalRealmId": "1136698"
      },
      "intValue": {
        "value": 512000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-daylist-share",
        "name": "feature_enabled"
      },
      "metadata": {
        "policyId": "91115",
        "externalRealm": "exp-planner",
        "externalRealmId": "1138195"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-videocoordinator",
        "name": "subtitles_autogenerated_override_enabled"
      },
      "metadata": {
        "policyId": "91266",
        "externalRealm": "exp-planner",
        "externalRealmId": "1138278"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-video",
        "name": "subtitles_enabled"
      },
      "metadata": {
        "policyId": "91275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1138277"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-videocoordinator",
        "name": "subtitles_enabled"
      },
      "metadata": {
        "policyId": "91275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1138277"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcast-interactivity-components",
        "name": "updated_interactivity_ui_enabled"
      },
      "metadata": {
        "policyId": "92108",
        "externalRealm": "exp-planner",
        "externalRealmId": "1138539"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-spotifyappprotocol",
        "name": "content_programming_enabled"
      },
      "metadata": {
        "policyId": "94952",
        "externalRealm": "exp-planner",
        "externalRealmId": "1139516"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "update_all_batch_size"
      },
      "metadata": {
        "policyId": "97496",
        "externalRealm": "exp-planner",
        "externalRealmId": "1140515"
      },
      "intValue": {
        "value": 750
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "stop_player_on_background_thread"
      },
      "metadata": {
        "policyId": "99760",
        "externalRealm": "exp-planner",
        "externalRealmId": "1178926"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-impl",
        "name": "entrypoint_card_stop_player_on_background_thread"
      },
      "metadata": {
        "policyId": "99762",
        "externalRealm": "exp-planner",
        "externalRealmId": "1149102"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-nowplayingviewmerch",
        "name": "npv_card_enabled"
      },
      "metadata": {
        "policyId": "99990",
        "externalRealm": "exp-planner",
        "externalRealmId": "1141514"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "scroll_background_dark_color"
      },
      "metadata": {
        "policyId": "99990",
        "externalRealm": "exp-planner",
        "externalRealmId": "1141514"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_podcast_html_description"
      },
      "metadata": {
        "policyId": "99990",
        "externalRealm": "exp-planner",
        "externalRealmId": "1141514"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "curation_indicator_on_track_row_enabled"
      },
      "metadata": {
        "policyId": "101696",
        "externalRealm": "exp-planner",
        "externalRealmId": "1142224"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-video",
        "name": "bitstream_caching_ttl"
      },
      "metadata": {
        "policyId": "106000",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143831"
      },
      "intValue": {
        "value": 604800
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "should_load_on_background_thread"
      },
      "metadata": {
        "policyId": "106002",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143833"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-episodechapters",
        "name": "now_playing_chapter_card_enabled"
      },
      "metadata": {
        "policyId": "106044",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143857"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "preferred_forward_buffer_duration"
      },
      "metadata": {
        "policyId": "106068",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143871"
      },
      "intValue": {
        "value": 2
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "preferred_forward_buffer_duration_when_media_is_playing"
      },
      "metadata": {
        "policyId": "106068",
        "externalRealm": "exp-planner",
        "externalRealmId": "1143871"
      },
      "intValue": {
        "value": 8
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "internal_request_size_data_kb"
      },
      "metadata": {
        "policyId": "107707",
        "externalRealm": "exp-planner",
        "externalRealmId": "1144448"
      },
      "intValue": {
        "value": 3072
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "internal_request_size_type"
      },
      "metadata": {
        "policyId": "107707",
        "externalRealm": "exp-planner",
        "externalRealmId": "1144448"
      },
      "enumValue": {
        "value": "Data"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "negative_player_positions_when_seek_backward"
      },
      "metadata": {
        "policyId": "115470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148051"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_lyrics"
      },
      "metadata": {
        "policyId": "115475",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148052"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-accessorymanager",
        "name": "use_cached_categorizer"
      },
      "metadata": {
        "policyId": "116407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148491"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ontour",
        "name": "enable_nowplaying_scroll_events_card"
      },
      "metadata": {
        "policyId": "116712",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148984"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ontour",
        "name": "nowplaying_scroll_response_cache_enabled"
      },
      "metadata": {
        "policyId": "116712",
        "externalRealm": "exp-planner",
        "externalRealmId": "1148984"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "sonos_minimum_ms_to_abort_by_transfer_to_same_device"
      },
      "metadata": {
        "policyId": "118861",
        "externalRealm": "exp-planner",
        "externalRealmId": "1151140"
      },
      "intValue": {
        "value": 15000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierartist",
        "name": "disable_blocked_content_for_gen_alpha"
      },
      "metadata": {
        "policyId": "121964",
        "externalRealm": "exp-planner",
        "externalRealmId": "1166232"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "third_party_playlist_support"
      },
      "metadata": {
        "policyId": "122978",
        "externalRealm": "exp-planner",
        "externalRealmId": "1153338"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_fb_messenger"
      },
      "metadata": {
        "policyId": "125069",
        "externalRealm": "exp-planner",
        "externalRealmId": "1154201"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_all_destinations"
      },
      "metadata": {
        "policyId": "125069",
        "externalRealm": "exp-planner",
        "externalRealmId": "1154201"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "share_enabled"
      },
      "metadata": {
        "policyId": "128133",
        "externalRealm": "exp-planner",
        "externalRealmId": "1155396"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_transcripts"
      },
      "metadata": {
        "policyId": "133659",
        "externalRealm": "exp-planner",
        "externalRealmId": "1157868"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "detect_and_resolve_smart_linear"
      },
      "metadata": {
        "policyId": "134174",
        "externalRealm": "exp-planner",
        "externalRealmId": "1225332"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierplaylist",
        "name": "decrease_pl_data_loader_update_interval_enabled"
      },
      "metadata": {
        "policyId": "134424",
        "externalRealm": "exp-planner",
        "externalRealmId": "1232175"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-rc-observable-aa-test",
        "name": "non_observable_property"
      },
      "metadata": {
        "policyId": "136104",
        "externalRealm": "exp-planner",
        "externalRealmId": "1158385"
      },
      "enumValue": {
        "value": "Blue"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-phone-number-signup",
        "name": "enable_alternative_code_verification_channel"
      },
      "metadata": {
        "policyId": "138243",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175851"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "heartbeat_interval"
      },
      "metadata": {
        "policyId": "149003",
        "externalRealm": "exp-planner",
        "externalRealmId": "1164045"
      },
      "intValue": {
        "value": 300
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "heartbeat_retry_interval"
      },
      "metadata": {
        "policyId": "149003",
        "externalRealm": "exp-planner",
        "externalRealmId": "1164045"
      },
      "intValue": {
        "value": 30
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_snapchat_lens_enabled"
      },
      "metadata": {
        "policyId": "149875",
        "externalRealm": "exp-planner",
        "externalRealmId": "1163531"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_audiobook_navigation_node"
      },
      "metadata": {
        "policyId": "150602",
        "externalRealm": "exp-planner",
        "externalRealmId": "1163819"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "network_request_timeout"
      },
      "metadata": {
        "policyId": "151274",
        "externalRealm": "exp-planner",
        "externalRealmId": "1164047"
      },
      "intValue": {
        "value": 30
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "send_events_on_bcd_event"
      },
      "metadata": {
        "policyId": "151276",
        "externalRealm": "exp-planner",
        "externalRealmId": "1164046"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_sticker_width_backend_driven"
      },
      "metadata": {
        "policyId": "153109",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165013"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-shareplay",
        "name": "is_shareplay_enabled"
      },
      "metadata": {
        "policyId": "155015",
        "externalRealm": "exp-planner",
        "externalRealmId": "1165678"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_licensor_content_filtering"
      },
      "metadata": {
        "policyId": "156348",
        "externalRealm": "exp-planner",
        "externalRealmId": "1166233"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-externalintegration",
        "name": "enable_content_filtering"
      },
      "metadata": {
        "policyId": "156348",
        "externalRealm": "exp-planner",
        "externalRealmId": "1166233"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "metadata_refresh_interval_seconds"
      },
      "metadata": {
        "policyId": "157532",
        "externalRealm": "exp-planner",
        "externalRealmId": "1166491"
      },
      "intValue": {
        "value": 3600
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-shareplay",
        "name": "is_shareplay_enabled_on_cars"
      },
      "metadata": {
        "policyId": "165396",
        "externalRealm": "exp-planner",
        "externalRealmId": "1169016"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-localnetworkbroadcasting",
        "name": "enable_broadcasting"
      },
      "metadata": {
        "policyId": "165408",
        "externalRealm": "exp-planner",
        "externalRealmId": "1169021"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "enabled_courses_postfix_on_podcast_filter"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "course_page_enabled"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "materials_tab_hidden"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-learning-courseupsellpage-impl",
        "name": "course_upsell_endpoints_web_host"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "enumValue": {
        "value": "production"
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "course_info_card_materials_row_hidden"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "is_watch_feed_entity_explorer_hidden"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "is_play_button_locked_badge_hidden"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_lesson_specifics"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "is_header_price_hidden"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "course_loadable_endpoints_web_host"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "enumValue": {
        "value": "production"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastepisode",
        "name": "enable_lesson_episode_routing"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-courseupsellpresenter-impl",
        "name": "upsell_presenter_enabled"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcast",
        "name": "is_course_specifics_extension_enabled"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-podcastuiplatform-podcastcontextmenu-impl",
        "name": "is_lesson_specifics_extension_enabled"
      },
      "metadata": {
        "policyId": "166577",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-performanceinstrumentation-impl",
        "name": "enable_subfeed_instrumentation"
      },
      "metadata": {
        "policyId": "168583",
        "externalRealm": "exp-planner",
        "externalRealmId": "1170178"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playback-platform",
        "name": "enable_local_fetchers"
      },
      "metadata": {
        "policyId": "169003",
        "externalRealm": "exp-planner",
        "externalRealmId": "1171533"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playback-platform",
        "name": "enable"
      },
      "metadata": {
        "policyId": "169003",
        "externalRealm": "exp-planner",
        "externalRealmId": "1171533"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-quickstart-pivot",
        "name": "quickstart_uri_supported"
      },
      "metadata": {
        "policyId": "170715",
        "externalRealm": "exp-planner",
        "externalRealmId": "1213135"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-cardetection-jumpstarttrigger-impl",
        "name": "trigger_enabled"
      },
      "metadata": {
        "policyId": "171490",
        "externalRealm": "exp-planner",
        "externalRealmId": "1171371"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-navigation",
        "name": "default_list_fallback"
      },
      "metadata": {
        "policyId": "173776",
        "externalRealm": "exp-planner",
        "externalRealmId": "1172273"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-notificationsv2",
        "name": "nen_opt_in_position"
      },
      "metadata": {
        "policyId": "174235",
        "externalRealm": "exp-planner",
        "externalRealmId": "1212491"
      },
      "intValue": {
        "value": 2
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetiertrack",
        "name": "music_videos_enabled"
      },
      "metadata": {
        "policyId": "176240",
        "externalRealm": "exp-planner",
        "externalRealmId": "1173139"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_audio_associations"
      },
      "metadata": {
        "policyId": "176240",
        "externalRealm": "exp-planner",
        "externalRealmId": "1173139"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-exts",
        "name": "enable_video_associations"
      },
      "metadata": {
        "policyId": "176240",
        "externalRealm": "exp-planner",
        "externalRealmId": "1173139"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-inlineintegrations",
        "name": "ios_track_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-inlineintegrations",
        "name": "ios_liked_songs_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-inlineintegrations",
        "name": "ios_artist_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-clientmessagingplatform",
        "name": "playlist_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-inlineintegrations",
        "name": "ios_your_library_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-clientmessagingplatform",
        "name": "album_integration_enabled"
      },
      "metadata": {
        "policyId": "183407",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198343"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-common",
        "name": "open_new_available_plans_page"
      },
      "metadata": {
        "policyId": "184034",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175929"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-available-plans-page",
        "name": "is_page_enabled"
      },
      "metadata": {
        "policyId": "184034",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175929"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline_extracted_color"
      },
      "metadata": {
        "policyId": "184134",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175966"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-context-track-color",
        "name": "enable_context_track_color"
      },
      "metadata": {
        "policyId": "184134",
        "externalRealm": "exp-planner",
        "externalRealmId": "1175966"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "avoid_mode_resolver_logic_when_track_nil"
      },
      "metadata": {
        "policyId": "186754",
        "externalRealm": "exp-planner",
        "externalRealmId": "1177002"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-bluetooth-logger-impl",
        "name": "bluetooth_logger_enabled"
      },
      "metadata": {
        "policyId": "187359",
        "externalRealm": "exp-planner",
        "externalRealmId": "1177185"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "jam_queue_button_enabled"
      },
      "metadata": {
        "policyId": "191457",
        "externalRealm": "exp-planner",
        "externalRealmId": "1178685"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-login",
        "name": "facebook_limited_login_enabled"
      },
      "metadata": {
        "policyId": "193788",
        "externalRealm": "exp-planner",
        "externalRealmId": "1179374"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-prerelease-nowplayingviewprovider-impl",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "196145",
        "externalRealm": "exp-planner",
        "externalRealmId": "1180167"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-artist-releases-impl",
        "name": "artist_releases_list_content_runtime_page_enabled"
      },
      "metadata": {
        "policyId": "198139",
        "externalRealm": "exp-planner",
        "externalRealmId": "1180786"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ontour",
        "name": "enable_nowplaying_scroll_events_card_on_ipad"
      },
      "metadata": {
        "policyId": "201591",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182044"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-embeddedctacards",
        "name": "should_enable_scalable_layout"
      },
      "metadata": {
        "policyId": "201591",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182044"
      },
      "boolValue": {
        "value": true
      }
    },
    // {
    //   "propertyId": {
    //     "scope": "ios-system-nowplayingviewmerch",
    //     "name": "npv_card_enabled_on_ipad"
    //   },
    //   "metadata": {
    //     "policyId": "201591",
    //     "externalRealm": "exp-planner",
    //     "externalRealmId": "1182044"
    //   },
    //   "boolValue": {
    //     "value": true
    //   }
    // },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "should_enable_scalable_layout_on_npv_entity"
      },
      "metadata": {
        "policyId": "201591",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182044"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastpolls",
        "name": "is_enabled_for_npv_on_ipad"
      },
      "metadata": {
        "policyId": "201591",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182044"
      },
      "boolValue": {
        "value": true
      }
    },
    // {
    //   "propertyId": {
    //     "scope": "ios-artistabout-artistaboutcard-impl",
    //     "name": "is_ipad_redesign_enabled"
    //   },
    //   "metadata": {
    //     "policyId": "201591",
    //     "externalRealm": "exp-planner",
    //     "externalRealmId": "1182044"
    //   },
    //   "boolValue": {
    //     "value": true
    //   }
    // },
    {
      "propertyId": {
        "scope": "ios-share-podcast-sharing",
        "name": "is_transcripts_suggestions_for_timestamp_enabled"
      },
      "metadata": {
        "policyId": "202073",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182197"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-excerpts",
        "name": "excerpts_enabled"
      },
      "metadata": {
        "policyId": "202073",
        "externalRealm": "exp-planner",
        "externalRealmId": "1182197"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-highlightsstats",
        "name": "sharing_enabled"
      },
      "metadata": {
        "policyId": "204702",
        "externalRealm": "exp-planner",
        "externalRealmId": "1183682"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-bluetooth-scanning-impl",
        "name": "bluetooth_scanning_timeout"
      },
      "metadata": {
        "policyId": "205277",
        "externalRealm": "exp-planner",
        "externalRealmId": "1183203"
      },
      "intValue": {
        "value": 1200
      }
    },
    {
      "propertyId": {
        "scope": "ios-short-link-branch",
        "name": "branch_logging_level"
      },
      "metadata": {
        "policyId": "205988",
        "externalRealm": "exp-planner",
        "externalRealmId": "1183459"
      },
      "enumValue": {
        "value": "error"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteninginvitationflow",
        "name": "enable_social_radar_onboarding"
      },
      "metadata": {
        "policyId": "206026",
        "externalRealm": "exp-planner",
        "externalRealmId": "1183480"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-localnetworksessionfinder",
        "name": "enable_discovery_v2"
      },
      "metadata": {
        "policyId": "206783",
        "externalRealm": "exp-planner",
        "externalRealmId": "1183725"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-podcastuiplatform-episodedescriptioncard-impl",
        "name": "show_episode_description_card"
      },
      "metadata": {
        "policyId": "208997",
        "externalRealm": "exp-planner",
        "externalRealmId": "1184480"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-device-predictability",
        "name": "recommendation_nudge_delay"
      },
      "metadata": {
        "policyId": "209881",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223217"
      },
      "intValue": {
        "value": 500
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-allboarding",
        "name": "skip_allboarding_for_auth"
      },
      "metadata": {
        "policyId": "210375",
        "externalRealm": "exp-planner",
        "externalRealmId": "1184910"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplayingbar",
        "name": "data_saver_tooltip"
      },
      "metadata": {
        "policyId": "212033",
        "externalRealm": "exp-planner",
        "externalRealmId": "1185568"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-content-formats-feature",
        "name": "list_platform_request_timeout_seconds"
      },
      "metadata": {
        "policyId": "220820",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188322"
      },
      "intValue": {
        "value": 40
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "update_focused_item_index_while_scrolling"
      },
      "metadata": {
        "policyId": "222438",
        "externalRealm": "exp-planner",
        "externalRealmId": "1188965"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "opc_refresh_enabled"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-error-impl",
        "name": "enable_offline_listening_device_limit_text"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline_playable_cache"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "send_opc_report"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline_playable_cache_num_keys_required"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "intValue": {
        "value": 3
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "offline_playable_cache_allow_default"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings",
        "name": "enable_offline_listening_toggle"
      },
      "metadata": {
        "policyId": "223660",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189361"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-pending-events",
        "name": "stats_interval_seconds"
      },
      "metadata": {
        "policyId": "225074",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189843"
      },
      "intValue": {
        "value": 300
      }
    },
    {
      "propertyId": {
        "scope": "core-pending-events",
        "name": "send_pes_as_metrics_snapshot"
      },
      "metadata": {
        "policyId": "225074",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189843"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-pending-events",
        "name": "stats_enable"
      },
      "metadata": {
        "policyId": "225074",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189843"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-pending-events",
        "name": "use_event_sender_persistence_completion"
      },
      "metadata": {
        "policyId": "225079",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189844"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "send_events_when_going_to_background"
      },
      "metadata": {
        "policyId": "225081",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189861"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "send_events_in_bg_task"
      },
      "metadata": {
        "policyId": "225081",
        "externalRealm": "exp-planner",
        "externalRealmId": "1189861"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibrarypodcast",
        "name": "new_episodes_wait_for_both_sections_to_load"
      },
      "metadata": {
        "policyId": "239073",
        "externalRealm": "exp-planner",
        "externalRealmId": "1193988"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-esperanto-feature",
        "name": "opc_ap_max_iterations"
      },
      "metadata": {
        "policyId": "240368",
        "externalRealm": "exp-planner",
        "externalRealmId": "1194313"
      },
      "intValue": {
        "value": 60
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierartist",
        "name": "override_default_artist_playback_to_linear_enabled"
      },
      "metadata": {
        "policyId": "244522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195640"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierartist",
        "name": "double_state_resume_enabled"
      },
      "metadata": {
        "policyId": "244522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195640"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-contextualshuffle",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "244522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195640"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-contextualshuffle",
        "name": "shuffle_storage_kind"
      },
      "metadata": {
        "policyId": "244522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195640"
      },
      "enumValue": {
        "value": "LocalSettings"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-encoreexperiments",
        "name": "reduced_play_button_tappable_area_enabled"
      },
      "metadata": {
        "policyId": "244522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195640"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "optimize_ess"
      },
      "metadata": {
        "policyId": "245440",
        "externalRealm": "exp-planner",
        "externalRealmId": "1195955"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-content-formats-feature",
        "name": "core_update_pub_date_index_on_list_update"
      },
      "metadata": {
        "policyId": "250436",
        "externalRealm": "exp-planner",
        "externalRealmId": "1202820"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-content-formats-feature",
        "name": "list_platform_episode_loader_throttling_milliseconds"
      },
      "metadata": {
        "policyId": "250436",
        "externalRealm": "exp-planner",
        "externalRealmId": "1202820"
      },
      "intValue": {}
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "fetch_missing_images"
      },
      "metadata": {
        "policyId": "251275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1197927"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "fetch_missing_track_descriptors"
      },
      "metadata": {
        "policyId": "251275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1197927"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-blendinvitation",
        "name": "euterpe_menu_option_position"
      },
      "metadata": {
        "policyId": "252960",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264987"
      },
      "intValue": {
        "value": 1
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "enable_euterpe_tooltip"
      },
      "metadata": {
        "policyId": "252960",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264987"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-partneraiassistant-metawearables",
        "name": "enable_integration"
      },
      "metadata": {
        "policyId": "254122",
        "externalRealm": "exp-planner",
        "externalRealmId": "1198849"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-bluetoothacquisition",
        "name": "onboarding_elegible_device_types"
      },
      "metadata": {
        "policyId": "259615",
        "externalRealm": "exp-planner",
        "externalRealmId": "1200563"
      },
      "enumValue": {
        "value": "speaker_and_car"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-bluetoothacquisition",
        "name": "is_bluetooth_acquisition_enabled"
      },
      "metadata": {
        "policyId": "259615",
        "externalRealm": "exp-planner",
        "externalRealmId": "1200563"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "curation_for_external_integrations_enabled"
      },
      "metadata": {
        "policyId": "260232",
        "externalRealm": "exp-planner",
        "externalRealmId": "1200784"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-playlistcreation",
        "name": "euterpe_onboarding_screen_enabled"
      },
      "metadata": {
        "policyId": "262231",
        "externalRealm": "exp-planner",
        "externalRealmId": "1201496"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-listuxplatformconsumers-curatecontextplugin",
        "name": "max_playlist_size"
      },
      "metadata": {
        "policyId": "265437",
        "externalRealm": "exp-planner",
        "externalRealmId": "1202470"
      },
      "intValue": {
        "value": 2000
      }
    },
    {
      "propertyId": {
        "scope": "ios-artistabout-artistaboutcard-impl",
        "name": "is_affinity_heuristic_enabled"
      },
      "metadata": {
        "policyId": "267231",
        "externalRealm": "exp-planner",
        "externalRealmId": "1203045"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-artistabout-artistaboutcard-impl",
        "name": "is_following_heuristic_enabled"
      },
      "metadata": {
        "policyId": "267231",
        "externalRealm": "exp-planner",
        "externalRealmId": "1203045"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings-platform",
        "name": "is_privacy_and_social_page_enabled"
      },
      "metadata": {
        "policyId": "267375",
        "externalRealm": "exp-planner",
        "externalRealmId": "1203090"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads-feature",
        "name": "disable_ads_for_audiobook_chapters"
      },
      "metadata": {
        "policyId": "269430",
        "externalRealm": "exp-planner",
        "externalRealmId": "1203696"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ads",
        "name": "lasertag_experiment_dummy"
      },
      "metadata": {
        "policyId": "273692",
        "externalRealm": "exp-planner",
        "externalRealmId": "1204931"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-watchplatform",
        "name": "player_state_application_context_updates_enabled"
      },
      "metadata": {
        "policyId": "274961",
        "externalRealm": "exp-planner",
        "externalRealmId": "1205456"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings-platform",
        "name": "is_content_personalization_page_enabled"
      },
      "metadata": {
        "policyId": "279391",
        "externalRealm": "exp-planner",
        "externalRealmId": "1206801"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-playlistcreation",
        "name": "custom_resolver_enabled"
      },
      "metadata": {
        "policyId": "280759",
        "externalRealm": "exp-planner",
        "externalRealmId": "1212634"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "attack_on_titan_easter_egg_enabled"
      },
      "metadata": {
        "policyId": "282347",
        "externalRealm": "exp-planner",
        "externalRealmId": "1207938"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_entity_extension_enabled"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_content_badge_episode_header_enabled"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_content_badge_playlist_row_enabled"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "npv_scroll_card_enabled"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_content_banner_episode_enabled"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectiondataloader",
        "name": "enable_gated_entity_extension_your_episode"
      },
      "metadata": {
        "policyId": "283313",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208275"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectionplatformlegacy",
        "name": "is_gated_entity_relations_enabled"
      },
      "metadata": {
        "policyId": "283314",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208276"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-gatedcontent",
        "name": "gated_content_banner_show_enabled"
      },
      "metadata": {
        "policyId": "283316",
        "externalRealm": "exp-planner",
        "externalRealmId": "1208278"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastpolls",
        "name": "should_show_polls_element_on_episode_page"
      },
      "metadata": {
        "policyId": "286859",
        "externalRealm": "exp-planner",
        "externalRealmId": "1209347"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-podcastpolls",
        "name": "should_show_polls_element_on_npv"
      },
      "metadata": {
        "policyId": "286859",
        "externalRealm": "exp-planner",
        "externalRealmId": "1209347"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-djsettings-impl",
        "name": "enable_language_selection"
      },
      "metadata": {
        "policyId": "286897",
        "externalRealm": "exp-planner",
        "externalRealmId": "1209356"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "accessibility_playback_controls_enabled"
      },
      "metadata": {
        "policyId": "287406",
        "externalRealm": "exp-planner",
        "externalRealmId": "1212189"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "stale_response_policy"
      },
      "metadata": {
        "policyId": "290635",
        "externalRealm": "exp-planner",
        "externalRealmId": "1210758"
      },
      "enumValue": {
        "value": "stale_while_revalidate"
      }
    },
    {
      "propertyId": {
        "scope": "ios-share-destinationhandler-impl",
        "name": "is_idaho_feed_enabled"
      },
      "metadata": {
        "policyId": "290738",
        "externalRealm": "exp-planner",
        "externalRealmId": "1210801"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-share-destinationhandler-impl",
        "name": "is_idaho_messages_enabled"
      },
      "metadata": {
        "policyId": "290738",
        "externalRealm": "exp-planner",
        "externalRealmId": "1210801"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "adaptive_video_min_resolution_filter_enabled"
      },
      "metadata": {
        "policyId": "290748",
        "externalRealm": "exp-planner",
        "externalRealmId": "1210812"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "observe_cpp_system_audio_output"
      },
      "metadata": {
        "policyId": "291144",
        "externalRealm": "exp-planner",
        "externalRealmId": "1210973"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-bluetoothacquisition",
        "name": "enable_ask_permission_when_user_join_as_participant"
      },
      "metadata": {
        "policyId": "291822",
        "externalRealm": "exp-planner",
        "externalRealmId": "1211181"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "long_press_to_hide_overlays_gesture_enabled"
      },
      "metadata": {
        "policyId": "293071",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223599"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "double_tap_to_like_gesture_enabled"
      },
      "metadata": {
        "policyId": "293071",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223599"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-voting",
        "name": "should_navigate_to_share_page"
      },
      "metadata": {
        "policyId": "294272",
        "externalRealm": "exp-planner",
        "externalRealmId": "1212049"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-time-stretcher-advanced-feature",
        "name": "time_stretcher_engine"
      },
      "metadata": {
        "policyId": "298491",
        "externalRealm": "exp-planner",
        "externalRealmId": "1213630"
      },
      "enumValue": {
        "value": "Finer"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "video_metadata_episodes_enabled"
      },
      "metadata": {
        "policyId": "300295",
        "externalRealm": "exp-planner",
        "externalRealmId": "1214460"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-embeddedctacards",
        "name": "music_npv_leavebehinds_enabled"
      },
      "metadata": {
        "policyId": "300976",
        "externalRealm": "exp-planner",
        "externalRealmId": "1214654"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-joingroupsession-impl",
        "name": "is_profile_completion_sheet_enabled"
      },
      "metadata": {
        "policyId": "301533",
        "externalRealm": "exp-planner",
        "externalRealmId": "1214849"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "block_installations_to_lg_tvs_with_dash"
      },
      "metadata": {
        "policyId": "302480",
        "externalRealm": "exp-planner",
        "externalRealmId": "1215193"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings-platform",
        "name": "is_apps_and_devices_page_enabled"
      },
      "metadata": {
        "policyId": "304019",
        "externalRealm": "exp-planner",
        "externalRealmId": "1215897"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-remoteconfiguration-bootstrap-impl",
        "name": "login_trials_enabled"
      },
      "metadata": {
        "policyId": "306423",
        "externalRealm": "exp-planner",
        "externalRealmId": "1216800"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-ondemandtrial",
        "name": "enable_call_trials_facade"
      },
      "metadata": {
        "policyId": "306423",
        "externalRealm": "exp-planner",
        "externalRealmId": "1216800"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-liveaudio-livestreampage",
        "name": "add_to_calendar_enabled"
      },
      "metadata": {
        "policyId": "309705",
        "externalRealm": "exp-planner",
        "externalRealmId": "1218051"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-campaigns",
        "name": "wrapped_routing_destination"
      },
      "metadata": {
        "policyId": "311529",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270150"
      },
      "enumValue": {
        "value": "wrapped_native"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-modes",
        "name": "duration_elements_unit"
      },
      "metadata": {
        "policyId": "315336",
        "externalRealm": "exp-planner",
        "externalRealmId": "1219485"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings-platform",
        "name": "is_account_page_enabled"
      },
      "metadata": {
        "policyId": "315933",
        "externalRealm": "exp-planner",
        "externalRealmId": "1219680"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_client_side_show_resume_episode"
      },
      "metadata": {
        "policyId": "320139",
        "externalRealm": "exp-planner",
        "externalRealmId": "1221022"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-show-cosmos",
        "name": "show_request_use_resumption_progress"
      },
      "metadata": {
        "policyId": "322022",
        "externalRealm": "exp-planner",
        "externalRealmId": "1221566"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "audiobook_progress_enabled"
      },
      "metadata": {
        "policyId": "323223",
        "externalRealm": "exp-planner",
        "externalRealmId": "1222033"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-prefetch-feature",
        "name": "media_prefetcher_cache_error_disable_seconds"
      },
      "metadata": {
        "policyId": "325573",
        "externalRealm": "exp-planner",
        "externalRealmId": "1222834"
      },
      "intValue": {
        "value": 300
      }
    },
    {
      "propertyId": {
        "scope": "core-common-capping",
        "name": "init_retry_amount"
      },
      "metadata": {
        "policyId": "325718",
        "externalRealm": "exp-planner",
        "externalRealmId": "1222861"
      },
      "intValue": {
        "value": 13
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "bottom_sheet_queue_enabled"
      },
      "metadata": {
        "policyId": "328481",
        "externalRealm": "exp-planner",
        "externalRealmId": "1223836"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-companioncontent",
        "name": "npv_scroll_card_enabled"
      },
      "metadata": {
        "policyId": "332775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1224900"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-companioncontent",
        "name": "npv_card_autoscroll_enabled"
      },
      "metadata": {
        "policyId": "332775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1224900"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-readalong",
        "name": "can_hide_controls_enabled"
      },
      "metadata": {
        "policyId": "332775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1224900"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-companioncontent",
        "name": "npv_scroll_card_audiobooks_enabled"
      },
      "metadata": {
        "policyId": "332775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1224900"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-companioncontent",
        "name": "audiobook_tabs_enabled"
      },
      "metadata": {
        "policyId": "332775",
        "externalRealm": "exp-planner",
        "externalRealmId": "1224900"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-smartshuffle-npvscrollrecscard-impl",
        "name": "enable_keep_previous_recommendations_in_same_position_whenever_possible"
      },
      "metadata": {
        "policyId": "336547",
        "externalRealm": "exp-planner",
        "externalRealmId": "1226008"
      },
      "boolValue": {
        "value": true
      }
    },
    // {
    //   "propertyId": {
    //     "scope": "ios-smartshuffle-npvscrollrecscard-impl",
    //     "name": "npv_scroll_card_enabled_on_ipad"
    //   },
    //   "metadata": {
    //     "policyId": "336547",
    //     "externalRealm": "exp-planner",
    //     "externalRealmId": "1226008"
    //   },
    //   "boolValue": {
    //     "value": true
    //   }
    // },
    {
      "propertyId": {
        "scope": "ios-smartshuffle-npvscrollrecscard-impl",
        "name": "npv_scroll_card_enabled"
      },
      "metadata": {
        "policyId": "336547",
        "externalRealm": "exp-planner",
        "externalRealmId": "1226008"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_play_history_shuffle_scorer"
      },
      "metadata": {
        "policyId": "336894",
        "externalRealm": "exp-planner",
        "externalRealmId": "1226077"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-listuxplatformconsumers-curatecontextplugin",
        "name": "enable_chip_view"
      },
      "metadata": {
        "policyId": "340530",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227294"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierplaylist",
        "name": "enable_artwork_tap_to_edit"
      },
      "metadata": {
        "policyId": "340952",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227370"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-usergeneratedcoverart",
        "name": "entry_point_in_edit_playlist_enabled"
      },
      "metadata": {
        "policyId": "340952",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227370"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-usergeneratedcoverart",
        "name": "enabled"
      },
      "metadata": {
        "policyId": "340952",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227370"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-usergeneratedcoverart",
        "name": "navigate_to_edit_playlist_cover_art_page"
      },
      "metadata": {
        "policyId": "340952",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227370"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-switching-ui",
        "name": "is_add_account_page_enabled"
      },
      "metadata": {
        "policyId": "341388",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227483"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "audiobooks_common_capping_stopping_node"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "enumValue": {
        "value": "Enabled"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-audiobook-capping",
        "name": "should_stop_player_when_capped"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-audiobook-sequence-provider-feature",
        "name": "enable_audio_capping_notification"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_sequence_player_routing"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_do_not_publish_trackless_intermediate_states"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_reset_track_sequence_on_advance_and_skip_for_sequence_player_tracks"
      },
      "metadata": {
        "policyId": "342162",
        "externalRealm": "exp-planner",
        "externalRealmId": "1227725"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "audiobook_finished_filter_enabled"
      },
      "metadata": {
        "policyId": "343178",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "audiobook_finished_icon_enabled"
      },
      "metadata": {
        "policyId": "343178",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-bluetoothacquisition",
        "name": "minimum_account_active_days"
      },
      "metadata": {
        "policyId": "345010",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228581"
      },
      "intValue": {
        "value": 21
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierplaylist",
        "name": "liked_songs_static_metadata_enabled"
      },
      "metadata": {
        "policyId": "345143",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228626"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "lg_wol_minimum_ms_to_abort_by_transfer_to_same_device"
      },
      "metadata": {
        "policyId": "345880",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228869"
      },
      "intValue": {
        "value": 30000
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "player_state_changed_putstate_throttling_window"
      },
      "metadata": {
        "policyId": "346048",
        "externalRealm": "exp-planner",
        "externalRealmId": "1228921"
      },
      "intValue": {
        "value": 50
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "samsung_wol_minimum_ms_to_abort_by_transfer_to_same_device"
      },
      "metadata": {
        "policyId": "346750",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229255"
      },
      "intValue": {
        "value": 20000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumdestination",
        "name": "premium_destination_hubsless"
      },
      "metadata": {
        "policyId": "346954",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229396"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "command_rate_limiter_window"
      },
      "metadata": {
        "policyId": "348026",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229710"
      },
      "intValue": {
        "value": 60000
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "max_allowed_commands_per_window"
      },
      "metadata": {
        "policyId": "348026",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229710"
      },
      "intValue": {
        "value": 60
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-switching-ui",
        "name": "is_draweritem_enabled"
      },
      "metadata": {
        "policyId": "348042",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229712"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-switching",
        "name": "max_accounts"
      },
      "metadata": {
        "policyId": "348042",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229712"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-switching",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "348042",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229712"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_hide_sensitive_comments"
      },
      "metadata": {
        "policyId": "348181",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229751"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectionplatformlegacy",
        "name": "hide_in_context_enabled"
      },
      "metadata": {
        "policyId": "348420",
        "externalRealm": "exp-planner",
        "externalRealmId": "1229873"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-npvprovider",
        "name": "watch_feed_in_npv_enabled"
      },
      "metadata": {
        "policyId": "350275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230437"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-npvprovider",
        "name": "watch_feed_in_npv_enabled_on_ipad"
      },
      "metadata": {
        "policyId": "350275",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230437"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_multi_reactions"
      },
      "metadata": {
        "policyId": "350345",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230450"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-esperanto-feature",
        "name": "opc_deduplication_method"
      },
      "metadata": {
        "policyId": "351061",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230609"
      },
      "enumValue": {
        "value": "CanonicalTrack"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "cached_files_curation_enabled"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "max_number_of_tracks"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "intValue": {
        "value": 350
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "enabled"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "cached_files_enabled"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "enable_smart_sorting"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "home_entry_point"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "enumValue": {
        "value": "promo"
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "enable_remove_track_context_menu_action"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline-playable-cache-feature",
        "name": "return_ongoing_status"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "home_entry_point_minimum_number_of_tracks"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "min_number_of_tracks"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "content_tag_filtering_max_tags"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "intValue": {
        "value": 15
      }
    },
    {
      "propertyId": {
        "scope": "ios-offline-playablecache-impl",
        "name": "enable_curation"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "offline_playable_cache_curation_enabled"
      },
      "metadata": {
        "policyId": "351067",
        "externalRealm": "exp-planner",
        "externalRealmId": "1230610"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourepisodes",
        "name": "reordering_enabled"
      },
      "metadata": {
        "policyId": "353075",
        "externalRealm": "exp-planner",
        "externalRealmId": "1231245"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-bluetoothacquisition",
        "name": "enable_settings_bluetooth_entry_point"
      },
      "metadata": {
        "policyId": "353837",
        "externalRealm": "exp-planner",
        "externalRealmId": "1231514"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarreceiver",
        "name": "token_expiry_time_interval"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarsender",
        "name": "sending_join_token_time_interval"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "intValue": {
        "value": 5000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-scanner",
        "name": "is_social_radar_scanner_enabled"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-advertiser",
        "name": "social_radar_v2_enabled"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarreceiver",
        "name": "enable_receiving"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-scanner",
        "name": "social_radar_close_threshold"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "intValue": {
        "value": 400
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_session_dismiss_invite_when_session_disappears"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarsender",
        "name": "sending_enabled"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "show_nearby_jam_nudge"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_jam_nudge_count"
      },
      "metadata": {
        "policyId": "360286",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233670"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-screenshot-detection",
        "name": "episode_screenshot_sharing_enabled"
      },
      "metadata": {
        "policyId": "360570",
        "externalRealm": "exp-planner",
        "externalRealmId": "1233762"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-settings-platform",
        "name": "is_connectivity_page_enabled"
      },
      "metadata": {
        "policyId": "361755",
        "externalRealm": "exp-planner",
        "externalRealmId": "1234121"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_sharing_v2"
      },
      "metadata": {
        "policyId": "362779",
        "externalRealm": "exp-planner",
        "externalRealmId": "1234461"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "cast_minimum_ms_to_abort_by_transfer_to_same_device"
      },
      "metadata": {
        "policyId": "364962",
        "externalRealm": "exp-planner",
        "externalRealmId": "1235115"
      },
      "intValue": {
        "value": 10000
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "playstation_minimum_ms_to_abort_by_transfer_to_same_device"
      },
      "metadata": {
        "policyId": "364975",
        "externalRealm": "exp-planner",
        "externalRealmId": "1235128"
      },
      "intValue": {
        "value": 15000
      }
    },
    {
      "propertyId": {
        "scope": "core-bitrate",
        "name": "net_fortune_fetch_enabled"
      },
      "metadata": {
        "policyId": "367637",
        "externalRealm": "exp-planner",
        "externalRealmId": "1235945"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ads",
        "name": "prevent_duplicate_ad_requests_for_slot"
      },
      "metadata": {
        "policyId": "369231",
        "externalRealm": "exp-planner",
        "externalRealmId": "1236406"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-addtoplaylist",
        "name": "filter_textfield_treshold"
      },
      "metadata": {
        "policyId": "373462",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237931"
      },
      "intValue": {
        "value": 6
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-addtoplaylist",
        "name": "sectioned_add_to_playlist_dialog_enabled"
      },
      "metadata": {
        "policyId": "373462",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237931"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "split_sectioned_add_to_playlist_request_enabled"
      },
      "metadata": {
        "policyId": "373462",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237931"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-addtoplaylist",
        "name": "disable_add_to_playlist_pagination"
      },
      "metadata": {
        "policyId": "373462",
        "externalRealm": "exp-planner",
        "externalRealmId": "1237931"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-npvprovider-impl",
        "name": "filter_recent_videos_enabled"
      },
      "metadata": {
        "policyId": "374890",
        "externalRealm": "exp-planner",
        "externalRealmId": "1238288"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audiobook-sequence-provider-feature",
        "name": "enable_audiobooks_stopping_on_end"
      },
      "metadata": {
        "policyId": "375736",
        "externalRealm": "exp-planner",
        "externalRealmId": "1238559"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-liveevents-contextmenu",
        "name": "enable_artist_concerts_context_menu"
      },
      "metadata": {
        "policyId": "375875",
        "externalRealm": "exp-planner",
        "externalRealmId": "1238601"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ontour",
        "name": "new_date_formatter_enabled"
      },
      "metadata": {
        "policyId": "375876",
        "externalRealm": "exp-planner",
        "externalRealmId": "1238602"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-short-link-branch",
        "name": "is_using_branch_custom_api"
      },
      "metadata": {
        "policyId": "377376",
        "externalRealm": "exp-planner",
        "externalRealmId": "1239130"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-jam-platformimpl",
        "name": "enable_connect_backend_sync"
      },
      "metadata": {
        "policyId": "381013",
        "externalRealm": "exp-planner",
        "externalRealmId": "1240299"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierartist",
        "name": "exclude_liked_releases_from_liked_songs"
      },
      "metadata": {
        "policyId": "382465",
        "externalRealm": "exp-planner",
        "externalRealmId": "1240885"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-videorecommendations-component-impl",
        "name": "stream_reporting_enabled"
      },
      "metadata": {
        "policyId": "384477",
        "externalRealm": "exp-planner",
        "externalRealmId": "1241466"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-auto-add-accounts",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "386602",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242135"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectionplatformlegacy",
        "name": "x_hide_icon_enabled"
      },
      "metadata": {
        "policyId": "387725",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242448"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "x_hide_icon_enabled"
      },
      "metadata": {
        "policyId": "387725",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242448"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "x_hide_icon"
      },
      "metadata": {
        "policyId": "387725",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242448"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-collection-feature",
        "name": "fetch_id_trait_for_artists"
      },
      "metadata": {
        "policyId": "388694",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242727"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-lockscreen-coldstart-impl",
        "name": "enable_carplay_triggers"
      },
      "metadata": {
        "policyId": "389478",
        "externalRealm": "exp-planner",
        "externalRealmId": "1242928"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumaccountmanagement",
        "name": "pam_prefetch_account_subscription_status"
      },
      "metadata": {
        "policyId": "390344",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243232"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-premiumaccountmanagement",
        "name": "billing_row_enabled"
      },
      "metadata": {
        "policyId": "390344",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243232"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-playlist",
        "name": "enable_public_playlists_setting"
      },
      "metadata": {
        "policyId": "391470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243595"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-playlist",
        "name": "enable_playlists_appear_on_your_profile_setting"
      },
      "metadata": {
        "policyId": "391470",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243595"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourepisodes",
        "name": "video_filter_enabled"
      },
      "metadata": {
        "policyId": "391528",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243598"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "is_twitter_enabled"
      },
      "metadata": {
        "policyId": "392764",
        "externalRealm": "exp-planner",
        "externalRealmId": "1243980"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "curation_for_videos_enabled"
      },
      "metadata": {
        "policyId": "392863",
        "externalRealm": "exp-planner",
        "externalRealmId": "1244001"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "smart_shuffle_allowed_setting_enabled"
      },
      "metadata": {
        "policyId": "396125",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245213"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "disable_repeat_on_context_change_for_search_tracks_sticky"
      },
      "metadata": {
        "policyId": "396524",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245320"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-prefetch-feature",
        "name": "media_prefetcher_enabled"
      },
      "metadata": {
        "policyId": "397121",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245544"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-prefetch-feature",
        "name": "media_prefetcher_feature_ads_window_size"
      },
      "metadata": {
        "policyId": "397121",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245544"
      },
      "intValue": {
        "value": 4
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remotedownloads-ui",
        "name": "enable_remote_downloads"
      },
      "metadata": {
        "policyId": "398743",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245955"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remotedownloads-offline2",
        "name": "enable_all_devices"
      },
      "metadata": {
        "policyId": "398743",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245955"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remotedownloads-offline2",
        "name": "enable_manager"
      },
      "metadata": {
        "policyId": "398743",
        "externalRealm": "exp-planner",
        "externalRealmId": "1245955"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "enable_optimistic_volume_updates"
      },
      "metadata": {
        "policyId": "398920",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246018"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "enable_lg_remote_installation"
      },
      "metadata": {
        "policyId": "399410",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246122"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "install_over_connect_timeout"
      },
      "metadata": {
        "policyId": "399410",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246122"
      },
      "intValue": {
        "value": 180
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectui",
        "name": "enable_app_install_dialogs_and_states"
      },
      "metadata": {
        "policyId": "399410",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246122"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-impl",
        "name": "creator_row_v2_redesign_enabled"
      },
      "metadata": {
        "policyId": "401493",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246710"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-resumption",
        "name": "progress_esperanto_use_timekeeper"
      },
      "metadata": {
        "policyId": "402027",
        "externalRealm": "exp-planner",
        "externalRealmId": "1246859"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-listuxplatformconsumers-defaulttracktraitsplugin",
        "name": "default_track_consumption_experience_trait_enabled"
      },
      "metadata": {
        "policyId": "402766",
        "externalRealm": "exp-planner",
        "externalRealmId": "1247056"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistuxplatformconsumers-sessioncontrol",
        "name": "force_navigation_after_playlist_header_image_change_enabled"
      },
      "metadata": {
        "policyId": "408182",
        "externalRealm": "exp-planner",
        "externalRealmId": "1248652"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "video_indicator_track_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-metadata-feature",
        "name": "fetch_associations_with_track_v4_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-relatedvideopage-impl",
        "name": "npv_music_video_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying",
        "name": "floating_music_videos_unit_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "download_music_video_metadata"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-artistkit",
        "name": "autoplay_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "track_videos_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-creativeworkcommons-retrievalrow-impl",
        "name": "track_video_indicator_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-musicvideoplaylistimpl",
        "name": "playlist_video_associations_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_music_video_playback"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "is_music_video_sticker_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-musicvideoplaylistimpl",
        "name": "disable_playback_over_connect_speakers"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-reporting-menuaction",
        "name": "enable_music_videos_track_reporting"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-musicvideos-artistkit",
        "name": "show_all_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "video_carousel_section_enabled"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": false
      }
    },
    {
      "propertyId": {
        "scope": "ios-playbackcontrol-audiovideoswitcher-impl",
        "name": "enable_connect_bottom_sheet"
      },
      "metadata": {
        "policyId": "409824",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249156"
      },
      "boolValue": {
        "value": true
      }
    },
    // {
    //   "propertyId": {
    //     "scope": "ios-prerelease-nowplayingviewprovider-impl",
    //     "name": "is_enabled_on_ipad"
    //   },
    //   "metadata": {
    //     "policyId": "410149",
    //     "externalRealm": "exp-planner",
    //     "externalRealmId": "1249243"
    //   },
    //   "boolValue": {
    //     "value": true
    //   }
    // },
    {
      "propertyId": {
        "scope": "core-bitrate",
        "name": "net_fortune_use_flac_average_bitrate"
      },
      "metadata": {
        "policyId": "410424",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249277"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_keeping_playback_session_on_transfer"
      },
      "metadata": {
        "policyId": "410496",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249297"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "timekeeper_sampling_rate"
      },
      "metadata": {
        "policyId": "411290",
        "externalRealm": "exp-planner",
        "externalRealmId": "1249560"
      },
      "intValue": {
        "value": 100
      }
    },
    {
      "propertyId": {
        "scope": "core-social-listening-feature",
        "name": "filter_session_updates"
      },
      "metadata": {
        "policyId": "412850",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250176"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-bitrate",
        "name": "car_mode_support_enabled"
      },
      "metadata": {
        "policyId": "412954",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250220"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share-menu",
        "name": "entity_sticker_width_percentage"
      },
      "metadata": {
        "policyId": "413646",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250359"
      },
      "intValue": {
        "value": 68
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-spotifyappprotocol",
        "name": "inter_app_protocol_close_socket_on_connection_handler_disconnect"
      },
      "metadata": {
        "policyId": "413848",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250418"
      },
      "enumValue": {
        "value": "None"
      }
    },
    {
      "propertyId": {
        "scope": "ios-carintegrations-interoperabilitymonitor",
        "name": "enabled"
      },
      "metadata": {
        "policyId": "414444",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250636"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-share",
        "name": "is_snapchat_canvas_sharing_enabled"
      },
      "metadata": {
        "policyId": "414836",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250717"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectionplatform",
        "name": "snooze_flow_enabled"
      },
      "metadata": {
        "policyId": "414837",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250718"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-hifi-remotedowngrade-impl",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "415642",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250933"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-hifi-remotedowngrade-impl",
        "name": "respect_auto_adjust"
      },
      "metadata": {
        "policyId": "415642",
        "externalRealm": "exp-planner",
        "externalRealmId": "1250933"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_play_history_shuffle_scorer_for_all"
      },
      "metadata": {
        "policyId": "416716",
        "externalRealm": "exp-planner",
        "externalRealmId": "1251244"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "multi_line_title_for_a11n_enabled"
      },
      "metadata": {
        "policyId": "417872",
        "externalRealm": "exp-planner",
        "externalRealmId": "1251642"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "is_course_review_enabled"
      },
      "metadata": {
        "policyId": "419120",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252099"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-learning-course-page-impl",
        "name": "is_course_review_prompting_enabled"
      },
      "metadata": {
        "policyId": "419120",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252099"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_session_allow_inactive"
      },
      "metadata": {
        "policyId": "419444",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252194"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-localnetworkbroadcasting",
        "name": "audio_route_speaker_workaround"
      },
      "metadata": {
        "policyId": "419444",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252194"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-album-albumfeatureproperties-impl",
        "name": "prerelease_card_enabled"
      },
      "metadata": {
        "policyId": "419452",
        "externalRealm": "exp-planner",
        "externalRealmId": "1252196"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-age-verification",
        "name": "is_account_settings_entry_point_enabled"
      },
      "metadata": {
        "policyId": "419697",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259594"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-fullscreen",
        "name": "pinch_to_zoom"
      },
      "metadata": {
        "policyId": "422526",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253128"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-nowplaying-contentlayers-impl",
        "name": "pinch_to_zoom_horizontal_video"
      },
      "metadata": {
        "policyId": "422526",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253128"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "recent_suggestions_deletion_enabled"
      },
      "metadata": {
        "policyId": "424022",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253588"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-modes",
        "name": "video_optionality_switch_button"
      },
      "metadata": {
        "policyId": "424086",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253626"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-videocoordinator",
        "name": "video_enabled_locally_setting"
      },
      "metadata": {
        "policyId": "424086",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253626"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-common",
        "name": "premium_referrals_settings_item_enabled"
      },
      "metadata": {
        "policyId": "424441",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266938"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-jam-platformimpl",
        "name": "enable_new_refresh_event_source"
      },
      "metadata": {
        "policyId": "424611",
        "externalRealm": "exp-planner",
        "externalRealmId": "1253809"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_shuffle_played_tracks_order"
      },
      "metadata": {
        "policyId": "425438",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254073"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-audiobook-audiobook-request-listening-hours",
        "name": "feature_enabled"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-audiobook-featureproperties-impl",
        "name": "consumption_tracking_add_ons_redesign"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-account-common",
        "name": "premium_plans_entry_point_row_enabled"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-audiobook-consideration-page",
        "name": "is_page_enabled"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-audiobook-featureproperties-impl",
        "name": "use_new_consumption_tracking_layout_backend"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-available-plans-page",
        "name": "addons_enabled"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-add-on-management-page",
        "name": "is_page_enabled"
      },
      "metadata": {
        "policyId": "425613",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264405"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ad-detection",
        "name": "enable"
      },
      "metadata": {
        "policyId": "426187",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ad-detection",
        "name": "enable_boundary_enhancement"
      },
      "metadata": {
        "policyId": "426187",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-download-feature",
        "name": "passthrough_full_file_download"
      },
      "metadata": {
        "policyId": "426187",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254321"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-excerpts",
        "name": "disable_for_static"
      },
      "metadata": {
        "policyId": "426188",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254322"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-podcast-platform-player",
        "name": "enable_creator_timestamp"
      },
      "metadata": {
        "policyId": "426188",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254322"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-login",
        "name": "recaptcha_token_timeout_millis"
      },
      "metadata": {
        "policyId": "426783",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254521"
      },
      "intValue": {
        "value": 5000
      }
    },
    {
      "propertyId": {
        "scope": "core-automix",
        "name": "max_auto_transition_length_seconds"
      },
      "metadata": {
        "policyId": "426866",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255664"
      },
      "intValue": {
        "value": 29
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibrarymusic-playlist",
        "name": "graduation_chip_enabled"
      },
      "metadata": {
        "policyId": "426930",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254551"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibrarymusic-playlist",
        "name": "nested_chips_section_enabled"
      },
      "metadata": {
        "policyId": "426930",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254551"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "shelf_remove_from_collection_enabled"
      },
      "metadata": {
        "policyId": "426935",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254557"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-alignedcuration",
        "name": "first_save_sheet_enabled"
      },
      "metadata": {
        "policyId": "426935",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254557"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-age-verification",
        "name": "age_specific_bottom_sheet_copy_enabled"
      },
      "metadata": {
        "policyId": "427498",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259595"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "supports_ping_request"
      },
      "metadata": {
        "policyId": "427597",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254718"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-smartshuffle-experience-impl",
        "name": "use_product_state_experience_resolver"
      },
      "metadata": {
        "policyId": "428397",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260633"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sociallisteningconnectentitylogic",
        "name": "nearby_session_enable_visibility_filter"
      },
      "metadata": {
        "policyId": "428464",
        "externalRealm": "exp-planner",
        "externalRealmId": "1254981"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-playlistcompactheader",
        "name": "enable_compact_header"
      },
      "metadata": {
        "policyId": "428781",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255067"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-listuxplatformconsumers-playlistemptystate",
        "name": "compact_empty_state_enabled"
      },
      "metadata": {
        "policyId": "428781",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255067"
      },
      "boolValue": {
        "value": true
      }
    },
    // {
    //   "propertyId": {
    //     "scope": "ios-feature-navigation",
    //     "name": "tab_configuration"
    //   },
    //   "metadata": {
    //     "policyId": "430387",
    //     "externalRealm": "exp-planner",
    //     "externalRealmId": "1255537"
    //   },
    //   "enumValue": {
    //     "value": "CreateRight"
    //   }
    // },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_npv_scroll_card"
      },
      "metadata": {
        "policyId": "430982",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255701"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "enable_npv_scroll_card_animation"
      },
      "metadata": {
        "policyId": "430982",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255701"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-submitfeedbackpage-impl",
        "name": "enable_dj_feedback"
      },
      "metadata": {
        "policyId": "430982",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255701"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-endless-aidjinteractivity-impl",
        "name": "interactivity_timeout"
      },
      "metadata": {
        "policyId": "430982",
        "externalRealm": "exp-planner",
        "externalRealmId": "1255701"
      },
      "enumValue": {
        "value": "seconds_20"
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarsender",
        "name": "metrics_enabled"
      },
      "metadata": {
        "policyId": "432434",
        "externalRealm": "exp-planner",
        "externalRealmId": "1256121"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remotedownloads-offline2",
        "name": "enable_audiobooks"
      },
      "metadata": {
        "policyId": "432459",
        "externalRealm": "exp-planner",
        "externalRealmId": "1256122"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_comments_intent_interceptor"
      },
      "metadata": {
        "policyId": "433138",
        "externalRealm": "exp-planner",
        "externalRealmId": "1256330"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-comments",
        "name": "enable_pinned_comments"
      },
      "metadata": {
        "policyId": "433174",
        "externalRealm": "exp-planner",
        "externalRealmId": "1256345"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-encore-experiments",
        "name": "enable_ecm_core_kit_secondary_button_migration"
      },
      "metadata": {
        "policyId": "437768",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257730"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-liveaudio-livestreampage",
        "name": "join_web_additional_button_enabled"
      },
      "metadata": {
        "policyId": "437969",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257804"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-share-destinationhandler-impl",
        "name": "instagram_notes_expiration_date"
      },
      "metadata": {
        "policyId": "438522",
        "externalRealm": "exp-planner",
        "externalRealmId": "1257951"
      },
      "intValue": {
        "value": 1755628800
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-ads",
        "name": "comscore_enabled"
      },
      "metadata": {
        "policyId": "440601",
        "externalRealm": "exp-planner",
        "externalRealmId": "1258556"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "campfire_feature_enabled"
      },
      "metadata": {
        "policyId": "441784",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261004"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "enable_soft_crash_when_link_dispatcher_unresponsive"
      },
      "metadata": {
        "policyId": "441784",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261004"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "nudge_retrieval_feature_enabled"
      },
      "metadata": {
        "policyId": "441784",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261004"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-platform-impl",
        "name": "is_magic_link_enabled"
      },
      "metadata": {
        "policyId": "441784",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261004"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "bar_duration_snap_percentage"
      },
      "metadata": {
        "policyId": "441801",
        "externalRealm": "exp-planner",
        "externalRealmId": "1260133"
      },
      "intValue": {
        "value": 20
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-jam",
        "name": "enable_network_metadata_for_token_resolution"
      },
      "metadata": {
        "policyId": "444078",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259572"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "copy_free_text_message_enabled"
      },
      "metadata": {
        "policyId": "444707",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259696"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-feature-impl",
        "name": "ubi_impression_v2_enabled"
      },
      "metadata": {
        "policyId": "445374",
        "externalRealm": "exp-planner",
        "externalRealmId": "1259952"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "available_styles_version"
      },
      "metadata": {
        "policyId": "446006",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265694"
      },
      "intValue": {
        "value": 3
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "group_chats_enabled"
      },
      "metadata": {
        "policyId": "449097",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261003"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-notificationsv2",
        "name": "preferences_use_v8_api"
      },
      "metadata": {
        "policyId": "449097",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261003"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-platform-impl",
        "name": "is_redirect_enabled"
      },
      "metadata": {
        "policyId": "449097",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261003"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-jam",
        "name": "enable_self_token_filtering"
      },
      "metadata": {
        "policyId": "450658",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261420"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-churnlock",
        "name": "swift_service_enabled"
      },
      "metadata": {
        "policyId": "450771",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261463"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "condensed_home_shortcuts_enabled"
      },
      "metadata": {
        "policyId": "451466",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261719"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-navigation-homecoming",
        "name": "homecoming_enabled"
      },
      "metadata": {
        "policyId": "451715",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261758"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-navigation-homecoming",
        "name": "homecoming_inactivity_period_in_minutes"
      },
      "metadata": {
        "policyId": "451715",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261758"
      },
      "intValue": {
        "value": 120
      }
    },
    {
      "propertyId": {
        "scope": "core-social-listening-feature",
        "name": "is_active_based_on_session_attribute"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-social-listening-feature",
        "name": "clear_session_on_connection_lost_timeout"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "intValue": {
        "value": 10
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "append_ignore_enhance_lens_to_context_url"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-social-listening-feature",
        "name": "disable_jam_mode_when_session_timeout"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "enable_shared_content_smart_shuffle_settings"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "control_smart_shuffle_via_player_options"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "emit_enhanced_ctx_metadata_in_play_command"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-contextualshuffle",
        "name": "write_to_centralized_shuffle_state"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "migrate_to_centralized_shuffle_state"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "write_to_centralized_shuffle_state"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "read_from_centralized_shuffle_state"
      },
      "metadata": {
        "policyId": "452508",
        "externalRealm": "exp-planner",
        "externalRealmId": "1261979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lyrics",
        "name": "enable_lyrics_character_count_fix"
      },
      "metadata": {
        "policyId": "454839",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262423"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-creator-impl",
        "name": "is_unmapped_music_videos_section_enabled"
      },
      "metadata": {
        "policyId": "454928",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268376"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierartist",
        "name": "unmapped_music_video_deeplink_enabled"
      },
      "metadata": {
        "policyId": "454928",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268376"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-lockscreen",
        "name": "crop_unmapped_mv_images"
      },
      "metadata": {
        "policyId": "454928",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268376"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-search-recentslist-impl",
        "name": "prefetching_enabled"
      },
      "metadata": {
        "policyId": "455694",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262699"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "your_library_pro_enabled"
      },
      "metadata": {
        "policyId": "455829",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262721"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-your-library-tags-feature",
        "name": "core_activate_tags_backend_client"
      },
      "metadata": {
        "policyId": "455829",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262721"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "enable_booklist_context_resolve"
      },
      "metadata": {
        "policyId": "456742",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262992"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierplaylist",
        "name": "enable_play_for_lists_with_audiobook_content"
      },
      "metadata": {
        "policyId": "456742",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262992"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-freetierplaylist",
        "name": "allow_playing_items_with_no_available_play_state"
      },
      "metadata": {
        "policyId": "456742",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262992"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistuxplatformconsumers-audiobook-plugin",
        "name": "enable_play_audiobook_in_list_context"
      },
      "metadata": {
        "policyId": "456742",
        "externalRealm": "exp-planner",
        "externalRealmId": "1262992"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-automix",
        "name": "auto_transition_downbeat_confidence_threshold"
      },
      "metadata": {
        "policyId": "457352",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263327"
      },
      "intValue": {
        "value": 40
      }
    },
    {
      "propertyId": {
        "scope": "ios-nowplaying-scroll-impl",
        "name": "nova_scroll_peek_animation_delay"
      },
      "metadata": {
        "policyId": "459375",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263764"
      },
      "intValue": {
        "value": 100
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "album_release_date_sort_order"
      },
      "metadata": {
        "policyId": "459851",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263954"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-yourlibaryx",
        "name": "album_new_release_icon"
      },
      "metadata": {
        "policyId": "459851",
        "externalRealm": "exp-planner",
        "externalRealmId": "1263954"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "recents_shelf_synchronize_strategy_enabled"
      },
      "metadata": {
        "policyId": "462182",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264838"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-podcastuiplatform-podcastimpl",
        "name": "disable_store"
      },
      "metadata": {
        "policyId": "462750",
        "externalRealm": "exp-planner",
        "externalRealmId": "1264982"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-offline",
        "name": "use_per_context_metadata_handling"
      },
      "metadata": {
        "policyId": "463068",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265033"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-premium-destination-page",
        "name": "enable_elements"
      },
      "metadata": {
        "policyId": "463806",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265197"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "allow_smart_shuffle_in_jams"
      },
      "metadata": {
        "policyId": "464890",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265458"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "jam_education_snackbar_enabled"
      },
      "metadata": {
        "policyId": "464890",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265458"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-player",
        "name": "disable_smart_shuffle_when_in_jam"
      },
      "metadata": {
        "policyId": "464890",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265458"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "emit_recommendations_in_play_command"
      },
      "metadata": {
        "policyId": "464890",
        "externalRealm": "exp-planner",
        "externalRealmId": "1265458"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-your-library-feature",
        "name": "core_your_library_decorate_mats"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-nowplaying-elements",
        "name": "mixing_play_button"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-audio-track-player-feature",
        "name": "dynamic_switch_to_mixer_enabled"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "supports_automix"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "is_enabled"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-playlist-feature",
        "name": "should_offline_mix_state"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-time-stretcher-advanced-feature",
        "name": "enable_time_stretcher_advanced"
      },
      "metadata": {
        "policyId": "466630",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "allow_edit_page_for_any_user"
      },
      "metadata": {
        "policyId": "466632",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266038"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_on_watch_feed_entrypoint_enabled"
      },
      "metadata": {
        "policyId": "466729",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269965"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_on_watch_feed_enabled"
      },
      "metadata": {
        "policyId": "466729",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269965"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_progressive_on_watch_feed_entrypoint_enabled"
      },
      "metadata": {
        "policyId": "466730",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266917"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "progressive_video_request_size_data_kb"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 1048576
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_buffer_configuration_minimum_duration_to_start_ms"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 1000
      }
    },
    {
      "propertyId": {
        "scope": "core-download",
        "name": "progressive_video_request_size_allow_modification"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_buffer_configuration_progressive_initial_request_size_in_bytes"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 100000
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_buffer_configuration_forward_buffer_while_paused_ms"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 2000
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_buffer_configuration_minimum_threshold_ms"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 2000
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_progressive_on_watch_feed_enabled"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_buffer_configuration_forward_buffer_while_playing_ms"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "intValue": {
        "value": 4000
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_should_early_load_metadata"
      },
      "metadata": {
        "policyId": "466731",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266915"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kubrick_progressive_on_audiobrowse_enabled"
      },
      "metadata": {
        "policyId": "466732",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266916"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-live",
        "name": "enable_beta_venue_section_tag"
      },
      "metadata": {
        "policyId": "467198",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266244"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-podcast-ads",
        "name": "podcast_use_executor"
      },
      "metadata": {
        "policyId": "467895",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266421"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_on_wrapped_enabled"
      },
      "metadata": {
        "policyId": "468480",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266920"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_on_npv_music_videos_enabled"
      },
      "metadata": {
        "policyId": "469748",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_on_npv_podcasts_enabled"
      },
      "metadata": {
        "policyId": "469748",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_stop_requesting_video_data_on_screen_locked"
      },
      "metadata": {
        "policyId": "469748",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269979"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_on_audiobrowse_enabled"
      },
      "metadata": {
        "policyId": "469776",
        "externalRealm": "exp-planner",
        "externalRealmId": "1266923"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-connect-feature",
        "name": "is_auth_info_credential_enabled"
      },
      "metadata": {
        "policyId": "470287",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267093"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-sleeptimer",
        "name": "ubiquity_sleep_timer"
      },
      "metadata": {
        "policyId": "471271",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267458"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "stp_multiline_max_visible_lines"
      },
      "metadata": {
        "policyId": "472225",
        "externalRealm": "exp-planner",
        "externalRealmId": "1267792"
      },
      "intValue": {
        "value": 3
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "duplicate_mix_experience_for_non_owners_enabled"
      },
      "metadata": {
        "policyId": "473228",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268034"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "duplicate_mix_experience_for_non_owners_context_menu_action_enabled"
      },
      "metadata": {
        "policyId": "473230",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268036"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-playlistcuration-mats",
        "name": "maximum_number_of_bars"
      },
      "metadata": {
        "policyId": "473232",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268037"
      },
      "intValue": {
        "value": 16
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-remoteconfiguration",
        "name": "example_boolean"
      },
      "metadata": {
        "policyId": "473253",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268047"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-share-destinationhandler-impl",
        "name": "is_instagram_notes_enabled"
      },
      "metadata": {
        "policyId": "474107",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268328"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_temp_transition_on_foreground_when_paused"
      },
      "metadata": {
        "policyId": "474847",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269163"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-watchfeed-npvprovider",
        "name": "should_use_elements_for_nova_scroll"
      },
      "metadata": {
        "policyId": "475235",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268662"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ad-detection",
        "name": "enable_dai_verification"
      },
      "metadata": {
        "policyId": "475426",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268708"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-ad-detection",
        "name": "enable_binary_search"
      },
      "metadata": {
        "policyId": "475426",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268708"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-campfire-properties-impl",
        "name": "remove_suggested_user_enabled"
      },
      "metadata": {
        "policyId": "476089",
        "externalRealm": "exp-planner",
        "externalRealmId": "1268908"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectiondataloader",
        "name": "enable_fetch_tracks_on_list_endpoint_data_loader"
      },
      "metadata": {
        "policyId": "476910",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269115"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-collectiondataloader",
        "name": "enable_streamtracklist_on_list_endpoint_data_loader"
      },
      "metadata": {
        "policyId": "476910",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269115"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "core-common-capping",
        "name": "init_retry_initial_interval"
      },
      "metadata": {
        "policyId": "477023",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269165"
      },
      "intValue": {
        "value": 1000
      }
    },
    {
      "propertyId": {
        "scope": "core-common-capping",
        "name": "init_retry_jitter_percentage"
      },
      "metadata": {
        "policyId": "477023",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269165"
      },
      "intValue": {
        "value": 25
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-jamuiimpl",
        "name": "enable_deeplink_flow"
      },
      "metadata": {
        "policyId": "477138",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269210"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-sociallistening-joingroupsession-impl",
        "name": "jam_deeplink_handler_enabled"
      },
      "metadata": {
        "policyId": "477138",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269210"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-system-smartshuffle",
        "name": "liked_songs_count_on_list_endpoint_data_loader_enabled"
      },
      "metadata": {
        "policyId": "477581",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269383"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-feature-lockscreen",
        "name": "clear_now_playing_info_when_connect_lockscreen_control_disabled"
      },
      "metadata": {
        "policyId": "477684",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269429"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-reinventfree-timecappivot-impl",
        "name": "track_time_cap_migration_enabled"
      },
      "metadata": {
        "policyId": "477790",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269459"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-home-evopage-impl",
        "name": "interactive_entrypoint_beta_tag_enabled"
      },
      "metadata": {
        "policyId": "477803",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269465"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-content-formats-feature",
        "name": "show_write_hook_use_new_write_hook_methods"
      },
      "metadata": {
        "policyId": "477926",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269493"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "core-collection-feature",
        "name": "episode_publish_date_index_write_hook_use_new_write_hook_methods"
      },
      "metadata": {
        "policyId": "477929",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269494"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-upcoming-releaseshubpage-impl",
        "name": "top_presaved_prereleases_highlight"
      },
      "metadata": {
        "policyId": "478281",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269628"
      },
      "enumValue": {
        "value": "count"
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "recents_gen_alpha_safety_filtering_enabled"
      },
      "metadata": {
        "policyId": "478474",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269735"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "send_events_in_background"
      },
      "metadata": {
        "policyId": "479079",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269878"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-eventsender",
        "name": "instrument_background_sending"
      },
      "metadata": {
        "policyId": "479079",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269878"
      },
      "boolValue": {}
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_back_buf_playing_ms"
      },
      "metadata": {
        "policyId": "479363",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269968"
      },
      "intValue": {
        "value": 60000
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_fwd_aud_buf_playing_long_form_ms"
      },
      "metadata": {
        "policyId": "479363",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269968"
      },
      "intValue": {
        "value": 300000
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-cover-art-snake",
        "name": "enabled"
      },
      "metadata": {
        "policyId": "479371",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269971"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_seg_loader_timer_interval_ms"
      },
      "metadata": {
        "policyId": "479374",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269977"
      },
      "intValue": {
        "value": 300
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_seg_loader_audio_mode_count"
      },
      "metadata": {
        "policyId": "479374",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269977"
      },
      "intValue": {
        "value": 4
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_bw_estimator_slow_ramp_up_multiplier"
      },
      "metadata": {
        "policyId": "479378",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269978"
      },
      "intValue": {
        "value": 50
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_bw_estimator_fast_ramp_down_multiplier"
      },
      "metadata": {
        "policyId": "479378",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269978"
      },
      "intValue": {
        "value": 100
      }
    },
    {
      "propertyId": {
        "scope": "ios-betamax-sdkintegration",
        "name": "kub_adap_bw_estimator_slow_ramp_down_multiplier"
      },
      "metadata": {
        "policyId": "479378",
        "externalRealm": "exp-planner",
        "externalRealmId": "1269978"
      },
      "intValue": {
        "value": 35
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "enable_new_device_picker_ubi"
      },
      "metadata": {
        "policyId": "480458",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270329"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "enable_device_discovery_snapshot"
      },
      "metadata": {
        "policyId": "480459",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270330"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-connectflags",
        "name": "device_discovery_snapshot_minutes_between_updates"
      },
      "metadata": {
        "policyId": "480459",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270330"
      },
      "intValue": {
        "value": 5
      }
    },
    {
      "propertyId": {
        "scope": "ios-feature-search",
        "name": "new_recents_performance_optimizations_enabled"
      },
      "metadata": {
        "policyId": "480521",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270359"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-jam",
        "name": "enable_range_metadata_for_token_resolution"
      },
      "metadata": {
        "policyId": "481368",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270711"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarreceiver",
        "name": "enable_extended_range"
      },
      "metadata": {
        "policyId": "481368",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270711"
      },
      "boolValue": {
        "value": true
      }
    },
    {
      "propertyId": {
        "scope": "ios-jam-socialradarsender",
        "name": "extended_range_enabled"
      },
      "metadata": {
        "policyId": "481368",
        "externalRealm": "exp-planner",
        "externalRealmId": "1270711"
      },
      "boolValue": {
        "value": true
      }
    },
];

const blacklist = [
  {
            "propertyId": {
              "scope": "ios-feature-contextualshuffle",
              "name": "is_enabled_for_on_demand_trial"
            },
            "metadata": {
              "policyId": "194505",
              "externalRealm": "exp-planner",
              "externalRealmId": "1226379"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-reinventfree-contextualupsellpremiumpromo-impl",
              "name": "is_promo_cta_enabled"
            },
            "metadata": {
              "policyId": "537443",
              "externalRealm": "exp-planner",
              "externalRealmId": "1288256"
            },
            "boolValue": {
              "value": false
            }
          },
    {
            "propertyId": {
              "scope": "ios-reinventfree-timecappivot-impl",
              "name": "music_video_upsell_enabled"
            },
            "metadata": {
              "policyId": "499774",
              "externalRealm": "exp-planner",
              "externalRealmId": "10000216"
            },
            "boolValue": {
              "value": false
            }
          },
     {
            "propertyId": {
              "scope": "ios-reinventfree-contextualupsellpremiumpromo-impl",
              "name": "show_time_cap_upsell_with_premium_badge"
            },
            "metadata": {
              "policyId": "537443",
              "externalRealm": "exp-planner",
              "externalRealmId": "1288256"
            },
            "boolValue": {
              "value": false
            }
          },
    {
            "propertyId": {
              "scope": "ios-reinventfree-controllerui-impl",
              "name": "enable_video_time_cap_upsell"
            },
            "metadata": {
              "policyId": "499774",
              "externalRealm": "exp-planner",
              "externalRealmId": "10000216"
            },
            "boolValue": {
              "value": false
            }
          },
     {
            "propertyId": {
              "scope": "ios-reinventfree-controllerui-impl",
              "name": "enable_video_time_cap_upsell_on_search"
            },
            "metadata": {
              "policyId": "515362",
              "externalRealm": "exp-planner",
              "externalRealmId": "1276915"
            },
            "boolValue": {
              "value": false
            }
          },
    {
            "propertyId": {
              "scope": "core-player",
              "name": "enable_music_video_premium_check"
            },
            "metadata": {
              "policyId": "515362",
              "externalRealm": "exp-planner",
              "externalRealmId": "1276915"
            },
            "boolValue": {
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-freetierplaylist",
              "name": "hide_video_badge_for_tracks"
            },
            "metadata": {
              "policyId": "515362",
              "externalRealm": "exp-planner",
              "externalRealmId": "1276915"
            },
            "boolValue": {
            }
          },
    {
            "propertyId": {
              "scope": "ios-system-available-plans-page",
              "name": "experiment_first_card_disable"
            },
            "metadata": {
              "policyId": "574308",
              "externalRealm": "exp-planner",
              "externalRealmId": "1282020"
            },
            "boolValue": {
            }
          },
    {
            "propertyId": {
              "scope": "core-restrictions",
              "name": "enable_can_play_content_extended_verdict"
            },
            "metadata": {
              "policyId": "520265",
              "externalRealm": "exp-planner",
              "externalRealmId": "10000874"
            },
            "enumValue": {
            }
          },
    {
            "propertyId": {
              "scope": "ios-learning-homeonboardingpage-impl",
              "name": "onboarding_page_enabled"
            },
            "metadata": {
              "policyId": "249059",
              "externalRealm": "exp-planner",
              "externalRealmId": "1197166"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "core-ads",
              "name": "restrict_swipe_to_skip"
            },
            "metadata": {
              "policyId": "575147",
              "externalRealm": "exp-planner",
              "externalRealmId": "1292365"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "core-scrobble",
              "name": "global_private_session_enabled"
            },
            "metadata": {
              "policyId": "498992",
              "externalRealm": "exp-planner",
              "externalRealmId": "10000202"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-listening-activity",
              "name": "listening_activity_enabled"
            },
            "metadata": {
              "policyId": "522819",
              "externalRealm": "exp-planner",
              "externalRealmId": "10001086"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-contextualshuffle",
              "name": "is_enabled_for_on_demand_trial"
            },
            "metadata": {
              "policyId": "194505",
              "externalRealm": "exp-planner",
              "externalRealmId": "1226379"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-remoteconfiguration-bootstrap-impl",
              "name": "login_trials_enabled"
            },
            "metadata": {
              "policyId": "306423",
              "externalRealm": "exp-planner",
              "externalRealmId": "1216800"
            },
            "boolValue": {}
          },
    {
            "propertyId": {
              "scope": "ios-feature-ondemandtrial",
              "name": "enable_call_trials_facade"
            },
            "metadata": {
              "policyId": "306423",
              "externalRealm": "exp-planner",
              "externalRealmId": "1216800"
            },
            "boolValue": {
              "value": true
            }
          },
    {
            "propertyId": {
              "scope": "ios-feature-contextualshuffle",
              "name": "is_enabled_for_on_demand_trial"
            },
            "metadata": {
              "policyId": "194505",
              "externalRealm": "exp-planner",
              "externalRealmId": "1226379"
            },
            "boolValue": {
              "value": true
            }
          },
];
// ===== 数组结束 =====


// ---------- Uint8Array helpers ----------

function concatBytes(...chunks) {
  let length = 0;
  for (const chunk of chunks) {
    if (chunk) length += chunk.length;
  }

  const output = new Uint8Array(length);
  let offset = 0;

  for (const chunk of chunks) {
    if (!chunk) continue;
    output.set(chunk, offset);
    offset += chunk.length;
  }

  return output;
}

function encodeVarint(value) {
  let number = BigInt(value);
  const output = [];

  if (number < 0n) number = 0n;

  do {
    let byte = Number(number & 0x7fn);
    number >>= 7n;
    if (number !== 0n) byte |= 0x80;
    output.push(byte);
  } while (number !== 0n);

  return Uint8Array.from(output);
}

function decodeVarint(bytes, offset) {
  let value = 0n;
  let shift = 0n;
  let cursor = offset;

  while (cursor < bytes.length) {
    const byte = bytes[cursor++];
    value |= BigInt(byte & 0x7f) << shift;

    if ((byte & 0x80) === 0) {
      return {
        value,
        next: cursor
      };
    }

    shift += 7n;

    if (shift > 70n) {
      throw new Error("protobuf varint is too long");
    }
  }

  throw new Error("truncated protobuf varint");
}

function encodeField(number, wireType, payload) {
  const tag = encodeVarint((BigInt(number) << 3n) | BigInt(wireType));

  if (wireType === 0) {
    return concatBytes(tag, encodeVarint(payload));
  }

  if (wireType === 2) {
    return concatBytes(tag, encodeVarint(payload.length), payload);
  }

  throw new Error("unsupported protobuf wire type: " + wireType);
}

function readFields(bytes) {
  const fields = [];
  let offset = 0;

  while (offset < bytes.length) {
    const start = offset;
    const tag = decodeVarint(bytes, offset);
    offset = tag.next;

    const number = Number(tag.value >> 3n);
    const wireType = Number(tag.value & 7n);

    if (!number) {
      throw new Error("invalid protobuf field number");
    }

    let value;
    let rawValue;

    if (wireType === 0) {
      const decoded = decodeVarint(bytes, offset);
      offset = decoded.next;
      value = decoded.value;
      rawValue = bytes.slice(decoded.next - Number(decoded.next - (decoded.next - offset)), decoded.next);
    } else if (wireType === 1) {
      if (offset + 8 > bytes.length) throw new Error("truncated fixed64");
      value = bytes.slice(offset, offset + 8);
      rawValue = value;
      offset += 8;
    } else if (wireType === 2) {
      const length = decodeVarint(bytes, offset);
      offset = length.next;

      const size = Number(length.value);
      if (offset + size > bytes.length) {
        throw new Error("truncated length-delimited field");
      }

      value = bytes.slice(offset, offset + size);
      rawValue = value;
      offset += size;
    } else if (wireType === 5) {
      if (offset + 4 > bytes.length) throw new Error("truncated fixed32");
      value = bytes.slice(offset, offset + 4);
      rawValue = value;
      offset += 4;
    } else {
      throw new Error("unsupported protobuf wire type: " + wireType);
    }

    fields.push({
      number,
      wireType,
      value,
      raw: bytes.slice(start, offset)
    });
  }

  return fields;
}

function serializeFields(fields) {
  const chunks = [];

  for (const field of fields) {
    if (field.wireType === 0) {
      chunks.push(encodeField(field.number, 0, field.value));
    } else if (field.wireType === 2) {
      chunks.push(encodeField(field.number, 2, field.value));
    } else if (field.wireType === 1) {
      const tag = encodeVarint((BigInt(field.number) << 3n) | 1n);
      chunks.push(concatBytes(tag, field.value));
    } else if (field.wireType === 5) {
      const tag = encodeVarint((BigInt(field.number) << 3n) | 5n);
      chunks.push(concatBytes(tag, field.value));
    }
  }

  return concatBytes(...chunks);
}

function firstField(fields, number, wireType) {
  return fields.find(field =>
    field.number === number &&
    (wireType === undefined || field.wireType === wireType)
  );
}

function textToBytes(value) {
  return new TextEncoder().encode(String(value));
}

function bytesToText(value) {
  return new TextDecoder().decode(value);
}

function stringField(number, value) {
  return encodeField(number, 2, textToBytes(value));
}

function boolValueBytes(value) {
  // protobuf 中 false 的 BoolValue 是空消息。
  return value ? encodeField(1, 0, 1) : new Uint8Array(0);
}

function intValueBytes(value) {
  return encodeField(1, 0, Number(value) >>> 0);
}

function enumValueBytes(value) {
  return stringField(1, value ?? "");
}


// ---------- Configuration entries ----------

function entryKey(entryFields) {
  const propertyId = firstField(entryFields, 1, 2);
  if (!propertyId) return null;

  const propertyFields = readFields(propertyId.value);
  const scopeField = firstField(propertyFields, 1, 2);
  const nameField = firstField(propertyFields, 2, 2);

  if (!scopeField || !nameField) return null;

  return {
    scope: bytesToText(scopeField.value),
    name: bytesToText(nameField.value)
  };
}

function keyOf(item) {
  if (!item || !item.propertyId) return null;

  const scope = item.propertyId.scope;
  const name = item.propertyId.name;

  if (typeof scope !== "string" || typeof name !== "string") {
    return null;
  }

  return scope + "\u0000" + name;
}

function valueFieldFromItem(item) {
  if (item.boolValue !== undefined) {
    const enabled = item.boolValue && item.boolValue.value === true;
    return {
      number: 3,
      wireType: 2,
      value: boolValueBytes(enabled)
    };
  }

  if (item.intValue !== undefined) {
    const value = item.intValue && item.intValue.value !== undefined
      ? item.intValue.value
      : 0;

    return {
      number: 4,
      wireType: 2,
      value: intValueBytes(value)
    };
  }

  if (item.enumValue !== undefined) {
    const value = item.enumValue && item.enumValue.value !== undefined
      ? item.enumValue.value
      : "";

    return {
      number: 5,
      wireType: 2,
      value: enumValueBytes(value)
    };
  }

  return null;
}

function metadataBytes(metadata) {
  if (!metadata) return null;

  const fields = [];

  if (metadata.policyId !== undefined) {
    fields.push(stringField(1, metadata.policyId));
  }

  if (metadata.externalRealm !== undefined) {
    fields.push(stringField(2, metadata.externalRealm));
  }

  if (metadata.externalRealmId !== undefined) {
    fields.push(stringField(3, metadata.externalRealmId));
  }

  return fields.length ? concatBytes(...fields) : null;
}

function propertyIdBytes(propertyId) {
  return concatBytes(
    stringField(1, propertyId.scope),
    stringField(2, propertyId.name)
  );
}

function createEntry(item) {
  const fields = [];

  fields.push({
    number: 1,
    wireType: 2,
    value: propertyIdBytes(item.propertyId)
  });

  const metadata = metadataBytes(item.metadata);
  if (metadata) {
    fields.push({
      number: 2,
      wireType: 2,
      value: metadata
    });
  }

  const value = valueFieldFromItem(item);
  if (value) fields.push(value);

  return serializeFields(fields);
}

function replaceEntryValue(entryFields, item) {
  const replacement = valueFieldFromItem(item);
  if (!replacement) return serializeFields(entryFields);

  const output = entryFields.filter(field =>
    field.number !== 3 &&
    field.number !== 4 &&
    field.number !== 5
  );

  output.push(replacement);
  return serializeFields(output);
}


// ---------- Apply overrides ----------

function buildLastValueMap(items) {
  const map = new Map();

  for (const item of items || []) {
    const key = keyOf(item);
    if (key) {
      // 后出现的重复项覆盖先出现的项。
      map.set(key, item);
    }
  }

  return map;
}

function buildBlacklistSet(items) {
  const set = new Set();

  for (const item of items || []) {
    const key = keyOf(item);
    if (key) set.add(key);
  }

  return set;
}

function patchConfiguration(configurationBytes) {
  const fields = readFields(configurationBytes);
  const overrideMap = buildLastValueMap(OVERRIDE_ASSIGNED_VALUES);
  const blacklistSet = buildBlacklistSet(blacklist);
  const present = new Set();
  const output = [];

  for (const field of fields) {
    if (field.number !== 3 || field.wireType !== 2) {
      output.push(field);
      continue;
    }

    let entryFields;

    try {
      entryFields = readFields(field.value);
    } catch (_) {
      output.push(field);
      continue;
    }

    const keyParts = entryKey(entryFields);

    if (!keyParts) {
      output.push(field);
      continue;
    }

    const key = keyParts.scope + "\u0000" + keyParts.name;

    // blacklist 优先级最高：直接删除。
    if (blacklistSet.has(key)) {
      continue;
    }

    present.add(key);

    const override = overrideMap.get(key);
    const newPayload = override
      ? replaceEntryValue(entryFields, override)
      : field.value;

    output.push({
      number: 3,
      wireType: 2,
      value: newPayload
    });
  }

  // 对响应中不存在的 override 项追加配置。
  for (const [key, item] of overrideMap.entries()) {
    if (blacklistSet.has(key)) continue;
    if (present.has(key)) continue;

    output.push({
      number: 3,
      wireType: 2,
      value: createEntry(item)
    });
  }

  return serializeFields(output);
}

function patchUcs(ucsBytes) {
  const ucsFields = readFields(ucsBytes);
  const resolve = firstField(ucsFields, 1, 2);

  if (!resolve) return ucsBytes;

  const resolveFields = readFields(resolve.value);
  const configuration = firstField(resolveFields, 1, 2);

  if (!configuration) return ucsBytes;

  configuration.value = patchConfiguration(configuration.value);
  resolve.value = serializeFields(resolveFields);

  return serializeFields(ucsFields);
}

function patchResponse(bodyBytes) {
  const rootFields = readFields(bodyBytes);
  const configuration = firstField(rootFields, 1, 2);

  if (!configuration) {
    throw new Error("configuration field 1 not found");
  }

  const configFields = readFields(configuration.value);

  const hasAssignedValues = configFields.some(
    field => field.number === 3 && field.wireType === 2
  );

  if (!hasAssignedValues) {
    throw new Error("configuration has no assigned values");
  }

  configuration.value = patchConfiguration(configuration.value);

  return serializeFields(rootFields);
}


// ---------- Loon entry ----------
/*
function responseBytes(response) {
  if (!response) return null;

  const body = response.body;
  if (body === undefined || body === null) return null;

  // binary-body-mode=true 时 Loon 直接给 Uint8Array
  if (body instanceof Uint8Array) return body;
  if (ArrayBuffer.isView(body)) {
    return new Uint8Array(body.buffer, body.byteOffset, body.byteLength);
  }
  if (body instanceof ArrayBuffer) return new Uint8Array(body);

  // 退路：没拿到二进制模式，body 是 String，protobuf 可能已被解码破坏
  if (typeof body === "string") {
    console.log("[spotify-config] body is String, binary-body-mode may be off");
    return new TextEncoder().encode(body);
  }

  return null;
}

(async () => {
  try {
    const request = $request;
    const response = $response;

    if (!request || request.method !== "POST") {
      console.log("[spotify-config] skip method: " + (request ? request.method : "no request"));
      $done({});
      return;
    }

    const original = responseBytes(response);

    if (!original || original.length === 0) {
      console.log(
        "[spotify-config] no body; status=" + (response ? response.status : "?") +
        " bodyType=" + (response ? typeof response.body : "?")
      );
      $done({});
      return;
    }

    const patched = patchResponse(original);

    console.log(
      "[spotify-config] patched " + original.length + " -> " + patched.length + " bytes"
    );

    $done({ body: patched });
  } catch (error) {
    console.log("[spotify-config] " + String(error));
    $done({});
  }
})();

*/
function responseBytes(response) {
  if (!response) return null;

  const body = response.body;
  if (body === undefined || body === null) return null;

  // Loon / Surge binary-body-mode 原生二进制分支
  if (body instanceof Uint8Array) return body;
  if (ArrayBuffer.isView(body)) {
    return new Uint8Array(body.buffer, body.byteOffset, body.byteLength);
  }
  if (body instanceof ArrayBuffer) return new Uint8Array(body);

  // QX 分支：字符串用 Latin1 无损还原字节（重点改动）
  if (typeof body === "string") {
    console.log("[spotify-config] QX latin1 fallback, body is String");
    const arr = new Uint8Array(body.length);
    for (let i = 0; i < body.length; i++) {
      arr[i] = body.charCodeAt(i) & 0xff;
    }
    return arr;
  }

  return null;
}

// Uint8Array -> Latin1 字符串，用于QX返回
// function bytesToQxBody(buf) {
//   return String.fromCharCode(...buf);
// }
function bytesToQxBody(buffer) {
  let text = "";
  const CHUNK = 0x2000;
  for (let i = 0; i < buffer.length; i += CHUNK) {
    text += String.fromCharCode.apply(null, buffer.subarray(i, i + CHUNK));
  }
  return text;
}

(async () => {
  try {
    const request = $request;
    const response = $response;

    if (!request || request.method !== "POST") {
      console.log("[spotify-config] skip method: " + (request ? request.method : "no request"));
      $done({});
      return;
    }

    const original = responseBytes(response);

    if (!original || original.length === 0) {
      console.log(
        "[spotify-config] no body; status=" + (response ? response.status : "?") +
        " bodyType=" + (response ? typeof response.body : "?")
      );
      $done({});
      return;
    }

    const patched = patchResponse(original);

    console.log(
      "[spotify-config] patched " + original.length + " -> " + patched.length + " bytes"
    );

    // 判断平台：如果是字符串类型body，说明是QX，需要转latin1字符串返回
    if (typeof $response.body === "string") {
      $done({ body: bytesToQxBody(patched) });
    } else {
      // Loon/Surge 原生二进制模式直接返回 Uint8Array
      $done({ body: patched });
    }
  } catch (error) {
    console.log("[spotify-config] " + String(error));
    $done({});
  }
})();

