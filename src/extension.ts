'use strict'

import * as path from 'path'
import { debug, DebugAdapterDescriptor, DebugAdapterDescriptorFactory, DebugAdapterExecutable, DebugSession, ExtensionContext, ProviderResult } from 'vscode'

export function activate(context: ExtensionContext) {
  context.subscriptions.push(debug.registerDebugAdapterDescriptorFactory('xslt', new DAPFactory()))
}

export function deactivate() { }

class DAPFactory implements DebugAdapterDescriptorFactory {
  createDebugAdapterDescriptor(_session: DebugSession, executable: DebugAdapterExecutable | undefined): ProviderResult<DebugAdapterDescriptor> {
		const command = 'java';
		const args = [
			// debugger argument: '-agentlib:jdwp=transport=dt_socket,address=127.0.0.1:8888,server=y,suspend=n'
			'-jar',
			path.join(__dirname, '..', 'server', `xslt-debug-adapter-0.1.1-all.jar`)
		]
		return new DebugAdapterExecutable(command, args)
	}  
}