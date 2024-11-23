/// <reference types="@solidjs/start/env" />

/**
 * https://ryanjc.com/blog/solidstart-cloudflare-pages/
 */

import type {
  Request as CfRequest,
  ExecutionContext,
} from "@cloudflare/workers-types";

/**
 * Reference: https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#parameters
 */
export interface CfPagesEnv {
  // Environment variables
  DATABASE_URL: string;
  DIRECT_URL: string;
  CRON_SECRET: string;
}

declare module "vinxi/http" {
  interface H3EventContext {
    cf: CfRequest["cf"];
    cloudflare: {
      request: CfRequest;
      env: CfPagesEnv;
      context: ExecutionContext;
    };
  }
}
