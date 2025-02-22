/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

import DisplayerText from "../../../displayers/DisplayerText";
import {initWrapper} from "./displayerTestsHelper";

describe('DisplayerText.vue', () => {
  it('Renders an entry in view mode', () => {
    const wrapper = initWrapper(DisplayerText, {})
    expect(wrapper.text()).toMatch('red')
  })

  it('Renders an entry in edit mode', async () => {
    const wrapper = initWrapper(DisplayerText, {})

    const viewerDiv = wrapper.find('div[tabindex="0"]');
    await viewerDiv.trigger('dblclick');

    expect(wrapper.find('input').element.value).toBe('red')
    expect(wrapper.find('input').element).toHaveFocus()
  })
})